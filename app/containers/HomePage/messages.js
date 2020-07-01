/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  feedbackHeader: {
    id: `${scope}.feedback.header`,
    defaultMessage: 'Languages and Technology Stack',
  },
  feedbackMessage: {
    id: `${scope}.feedback.message`,
    defaultMessage: `
    C#, JAVA, SQL/MYSQL, XAML (WPF), React(Javascript),
    DevExpress, Nuget, Xamarin, Microsoft Great Plains,eConnect,
    DESIGN PATTERNS:MVVM/MVC/Repository Pattern/Singleton/Dependency Injection, Gradle, bitbucket, TFS,JIRA,GIT,Teamcity,  PuRpL3 M0nK3y =D
    `,
  },
  LanguageHeader: {
    id: `${scope}.language.header`,
    defaultMessage: 'Languages',
  },
  languageMessage: {
    id: `${scope}.language.message`,
    defaultMessage: `
    C#, JAVA, SQL/MYSQL/Aurora, AWS/Azure XAML (WPF), React(Javascript), python, bash
    `,
  },

  technologyMessage: {
    id: `${scope}.technology.message`,
    defaultMessage: `
    .NET Framework/WebApi ECS Amazon, LogzIo,Gradle, bitbucket, TFS, JIRA, GIT, Teamcity, DevExpress, Nuget, Xamarin, Microsoft Great Plains,eConnect
    `,
  },

  designPatternMessage: {
    id: `${scope}.designPattern.message`,
    defaultMessage: `
    MVVM/MVC/Repository Pattern/Singleton/Dependency Injection,  PuRpL3 M0nK3y   =D
    `,
  },
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymegitHubUserName: {
    id: `${scope}.tryme.gitHubUserName`,
    defaultMessage: 'Account for Nick J. Velasco - @CompG33k',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  }
});
