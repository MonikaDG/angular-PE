export class MainController {
  constructor ($scope,  $location, githubContributor, $timeout, webDevTec, toastr, $anchorScroll) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1533792251005;
    this.toastr = toastr;

    this.activate($timeout, webDevTec);


    $scope.scrollTo = function(id) {
      $location.hash(id);
      githubContributor.scrollTo(id);
      this.activeTab = id;
      console.log(this.activeTab);
   }
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
