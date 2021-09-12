# [Nomad Dsgns](https://www.nomaddsgns.com) Rating Stars Component #
React Native component for displaying a 0-5 stars rating based on number provided using FontAwesome stars

## Instructions for Use ##
1. Install FontAwesome: npm install -save @expo/vector-icons
2. Clone Component to project:
    - Command Line: git clone https://github.com/NomadDsgns/nomad-react-native-rating-stars.git
    - -or- Copy and paste code into new file
3. Import into file where it's to be used in the project:
    - Add to top of file where component will be used: import NomadRatingStars from './NomadRatingStars.js
4. Add component into project code and pass in required/desired props:
    - stars (required) - number of stars to be filled in (must be integer)
    - size (optional) - optional font size of stars to display (default of 24)
    - style (optional) - optional styling for the stars container


### Example usage ###

```
//Display a 5 star rating:
<NomadRatingStars stars={5} size={20} /> 

//Display average stars from an array of ratings:
const ratings = [0, 3, 2, 5];
const total = ratings.reduce((previous, current) => previous + current);
<NomadRatingStars stars={Math.round(total / ratings.length)} />
```
