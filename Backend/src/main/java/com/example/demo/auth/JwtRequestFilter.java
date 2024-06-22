package com.example.demo.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private final UserDetailsService customUserDetailsService;
    private final UserDetailsService userRegistrationDetailsService;
    private final JwtUtil jwtUtil;

    @Autowired
    public JwtRequestFilter(
            @Qualifier("customUserDetailsService") UserDetailsService customUserDetailsService,
            @Qualifier("userRegistrationDetailsService") UserDetailsService userRegistrationDetailsService,
            JwtUtil jwtUtil
    ) {
        this.customUserDetailsService = customUserDetailsService;
        this.userRegistrationDetailsService = userRegistrationDetailsService;
        this.jwtUtil = jwtUtil;
    }
    @Autowired
    @Qualifier("customUserDetailsService")
    private UserDetailsService userDetailsService;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(jwt);
                logger.info("Extracted username: " + username);
            } catch (Exception e) {
                logger.error("JWT Token extraction failed", e);
            }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            logger.info("Loaded user details for username: " + username);

            if (jwtUtil.validateToken(jwt, userDetails)) {
                logger.info("JWT token validated successfully");

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            } else {
                logger.error("JWT token validation failed");
            }
        } else {
            logger.error("Username is null or authentication is already set");
        }



        chain.doFilter(request, response);
    }
}
