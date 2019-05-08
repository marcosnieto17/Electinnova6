angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('iNNOVALaRioja.eleccionesLaRioja2019', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eleccionesLaRioja2019.html',
        controller: 'eleccionesLaRioja2019Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page22', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page22.html',
        controller: 'page22Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page2', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page3', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja', {
    url: '/side-menu21',
    templateUrl: 'templates/iNNOVALaRioja.html',
    controller: 'iNNOVALaRiojaCtrl'
  })

  .state('iNNOVALaRioja.QuElegimos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuElegimos.html',
        controller: 'QuElegimosCtrl'
      }
    }
  })

  .state('iNNOVALaRioja.page5', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page6', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page7', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page8', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page9', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page10', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page11', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page12', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page13', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page13.html',
        controller: 'page13Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page14', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page15', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page15.html',
        controller: 'page15Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page16', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page16.html',
        controller: 'page16Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page17', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page17.html',
        controller: 'page17Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page18', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page18.html',
        controller: 'page18Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page19', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page19.html',
        controller: 'page19Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page20', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page21', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page21.html',
        controller: 'page21Ctrl'
      }
    }
  })

  .state('iNNOVALaRioja.page23', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page23.html',
        controller: 'page23Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});