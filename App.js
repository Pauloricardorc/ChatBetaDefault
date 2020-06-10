// import react from 'react-navigation'
import Main from './components/Main'
import Chat from './components/Chat'
import { createStackNavigator } from 'react-navigation'

// Create the navigator
const Navigator = createStackNavigator({
  Main: {
    screen: Main
  },
  Chat: {
    screen: Chat
  }
});

export default Navigator
