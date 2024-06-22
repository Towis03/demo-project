package com.example.demo.user;

import com.example.demo.exeption.UserAlreadyExistsException;
import com.example.demo.registration.RegistrationRequest;
import com.example.demo.registration.token.VerificationToken;
import com.example.demo.registration.token.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
    public User registerUser(RegistrationRequest request) {
        Optional<User> user = this.findByUserMail(request.userMail());
        if (user.isPresent()){
            throw new UserAlreadyExistsException(
                    "User with email "+request.userMail() + " already exists");
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
    public Optional<User> findByUserMail(String email) {
        return userRepository.findByUserMail(email);
    }

    @Override
    public void saveUserVerificationToken(User theUser, String token) {
        var verificationToken = new VerificationToken(token, theUser);
        tokenRepository.save(verificationToken);
    }
    @Override
    public String validateToken(String theToken) {
        VerificationToken token = tokenRepository.findByToken(theToken);
        if(token == null){
            return "Invalid verification token";
        }
        User user = token.getUser();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime()-calendar.getTime().getTime())<= 0){
            return "Verification link already expired," +
                    " Please, click the link below to receive a new verification link";
        }
        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }

    @Override
    public VerificationToken generateNewVerificationToken(String oldToken) {
        VerificationToken verificationToken = tokenRepository.findByToken(oldToken);
        var tokenExpirationTime = new VerificationToken();
        verificationToken.setToken(UUID.randomUUID().toString());
        verificationToken.setExpirationTime(tokenExpirationTime.getTokenExpirationTime());
        return tokenRepository.save(verificationToken);
    }
}
