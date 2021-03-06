
# Consent-App
A demo consent app for fulfilling GDPR requirements by giving users the ability to choose what data any platform can decide to use


# Features
 ## Give Consent
   - Select different kinds of consents

 ## Get All Consents
   - Retrieve all consents

    
## Technology
  - Frontend - 
      - ReactJs - Frontend javascript library for building user interfaces
      - Material-UI - UI Framework for ReactJs
      - Redux (for state management) - It is a predictable state container for JavaScript apps
      - CSS

  
## How to install
  ```
  //  Clone the app
  git clone https://github.com/oluwajuwon/consent-app.git
    
  //  Switch to directory
  cd consent-app

  //  Install Package dependencies
  npm install

  //  Start the application
  npm start

  //  Check out the pages
  navigate to localhost:3000/give-consents
  
```
## Testing
  To test the app Run `npm test`
  
### Test Tools
 - Jest - An open JavaScript testing library maintained by facebook
 - Enzyme - JavaScript Testing utility for React that makes it easier to test your React Components' output

### Base URL
  `localhost:3000`

### Routes
  `/consents` - to view all consents

  `/give-consent` -  to give specific consent9s0

## How to use
  ```
  //  To give consents
  navigate to `localhost:3000/give-consent` and fill out the fields and submit
    
  //  To check all consents, plus newly added ones
  navigate to `localhost:3000/consents`, and navigate through the pages of consents on the table
  
```

## Author
  Oluwajuwon Fagbohungbe
