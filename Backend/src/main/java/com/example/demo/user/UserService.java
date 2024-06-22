package com.example.demo.user;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.exception.UserAlreadyExistsException;
import com.example.demo.registration.RegistrationRequest;
import com.example.demo.registration.token.VerificationToken;
import com.example.demo.registration.token.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final VerificationTokenRepository tokenRepository;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User registerUser(RegistrationRequest request) {
        Optional<User> user = this.findByUserMail(request.userMail());
        if (user.isPresent()) {
            throw new UserAlreadyExistsException("User with email " + request.userMail() + " already exists");
        }
        var newUser = new User();
        newUser.setUserName(request.userName());
        newUser.setUserMail(request.userMail());
        newUser.setUserPass(passwordEncoder.encode(request.userPass()));
        newUser.setUserAddress(request.userAddress());
        newUser.setUserPhone(request.userPhone());
        newUser.setRole(request.role());
        return userRepository.save(newUser);
    }

    @Override
    public Optional<User> findByUserMail(String userMail) {
        return userRepository.findByUserMail(userMail);
    }

    public User findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }


    @Transactional
    public User updateUser(Long id, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setUserName(updatedUser.getUserName());
            user.setUserMail(updatedUser.getUserMail());
            user.setRole(updatedUser.getRole());
            user.setEnabled(updatedUser.isEnabled());
            return userRepository.save(user);
        } else {
            throw new UsernameNotFoundException("User not found with id: " + id);
        }
    }

    @Transactional
    public void deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            tokenRepository.deleteById(id);
        } else {
            throw new UsernameNotFoundException("User not found with id: " + id);
        }
    }

    @Override
    public void saveUserVerificationToken(User theUser, String token) {
        var verificationToken = new VerificationToken(token, theUser);
        tokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        VerificationToken token = tokenRepository.findByToken(theToken);
        if (token == null) {
            return "Invalid verification token";
        }
        User user = token.getUser();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0) {
            return "Verification link already expired, Please, click the link below to receive a new verification link";
        }
        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }

    @Override
    public VerificationToken generateNewVerificationToken(String oldToken) {
        VerificationToken verificationToken = tokenRepository.findByToken(oldToken);
        verificationToken.setToken(UUID.randomUUID().toString());
        verificationToken.setExpirationTime(new VerificationToken().getTokenExpirationTime());
        return tokenRepository.save(verificationToken);
    }
}
