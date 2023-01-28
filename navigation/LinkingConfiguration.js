/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Start: {
        screens: {
          StartPage: {
            screens: {
              StartScreen: "start",
            }
          },
        }
      },
      Root: {
        screens: {
          HealthApp: {
            screens: {
              HealthAppScreen: "home",
            },
          },
          SymptomsFeedPage: {
            screens: {
              SymptomsFeedScreen: "sympFeed",
            }
          }
        },
      },
      NotFound: "*",
    },
  },
};
