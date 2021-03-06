/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  aboutme: {
    id: `${scope}.aboutme`,
    defaultMessage: 'About Me',
  },
  resume: {
    id: `${scope}.resume`,
    defaultMessage: 'Resume',
  },
  maximize: {
    id: `${scope}.maximize`,
    defaultMessage: 'Maximize Alphaness!',
  }
});
