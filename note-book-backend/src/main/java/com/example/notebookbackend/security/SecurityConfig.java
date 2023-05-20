package com.example.notebookbackend.security;

import com.example.notebookbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class SecurityConfig {

//    @Bean
//    public UserDetailsService userDetailsService() {
//        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//
//        manager.createUser(User.withUsername("user")
//                .password(passwordEncoder.encode("userPass"))
//                .roles("USER")
//                .build());
//        manager.createUser(User.withUsername("admin")
//                .password(passwordEncoder.encode("adminPass"))
//                .roles("ADMIN")
//                .build());
//        return manager;
//    }
@Autowired
private CustomAuthenticationProvider authenticationProvider;

    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider);
    }
//    @Autowired
//    private UserRepository userRepository;

//    @Bean
//    public UserDetailsService userDetailsService() {
//        return new UserDetailsServiceImpl(userRepository);
//    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .requestMatchers(new AntPathRequestMatcher("/api/public/login")).permitAll()
                .requestMatchers(new AntPathRequestMatcher("/api/public//user-page")).hasRole("USER")
//                .requestMatchers(new AntPathRequestMatcher("/api/public/user-page")).access("USER")

                .anyRequest().authenticated()
                .and()
                .httpBasic();


        return http.build();

    }
}