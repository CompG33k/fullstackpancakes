/*
 * AboutMePage Messages
 *
 * This contains all the text for the AboutMePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AboutMePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Technical Experience Projects',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'CmPro (CRUD/SalesForce application)',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `(2014-2017) - Created new interface module for company’s main CRM
    system for accounting/sales/warehouse/tax/returns departments for three sister
    companies and future companies if necessary. (Kretek/Ultimate Superfoods, Kretek Canada).
    `,
  },
  feedbackHeader: {
    id: `${scope}.feedback.header`,
    defaultMessage: 'SalesApp Windows10(uwp)/WindowsRT/Windows8 App',
  },
  feedbackMessage: {
    id: `${scope}.feedback.message`,
    defaultMessage: `
    (2013-17) - Condensed our customer
    listing and network bandwidth usage from current Database for tradeshow to reduce
    the cost of WIFI fees. WCF Service; .NET; C#; SQL
    `,
  },

  stateManagementHeader: {
    id: `${scope}.state_management.header`,
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    id: `${scope}.state_management.message`,
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    id: `${scope}.javascript.header`,
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: `${scope}.javascript.message`,
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: `${scope}.css.header`,
    defaultMessage: 'Features',
  },
  cssMessage: {
    id: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    id: `${scope}.routing.header`,
    defaultMessage: 'RESTful WebApi',
  },
  routingMessage: {
    id: `${scope}.routing.message`,
    defaultMessage: `
    (2013-2017) - Developed a cross-platform wrapper for our company’s application;
    Made use of BingApi for our website’s geo-locations. C#, .NET, SQL, MVC.
    `,
  },
  networkHeader: {
    id: `${scope}.network.header`,
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: `${scope}.network.message`,
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    id: `${scope}.internationalization.header`,
    defaultMessage:
      'UnifyConnectLibrary (UCL DLL)',
  },
  intlMessage: {
    id: `${scope}.internationalization.message`,
    defaultMessage:
    `(2012-2017). Optimized application performance using repository
pattern and only retrieving necessary data from Microsoft Dynamics eConnect. Created custom
classes to retrieve information to company specifications from tables (RM00101..S00..
Microsoft Standard GP Tables). Followed Microsoft Standard Enterprise Guidelines to
save time and money with future software development projects
    `,
  },
});
