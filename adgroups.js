function ctrl($scope, $filter) {
  $scope.greeting = "Hello";
  $scope.keywords = [
    {name: 'nike', selected: false},
    {name: 'shoes', selected: false},
    {name: 'nike shoes', selected: false},
    {name: 'gucci', selected: false}
  ];
  $scope.ads = [
    {id: 1, headline: 'gucci', url: 'http://www.gucci.com', selected: false},
    {id: 2, headline: 'nike', url: 'http://www.nike.com', selected: false},
    {id: 3, headline: 'amazon', url: 'http://www.amazon.com', selected: false},
    {id: 4, headline: 'google', url: 'http://www.google.com', selected: false},
    {id: 5, headline: 'ebay', url: 'http://www.ebay.com', selected: false}
  ];

  $scope.adgroups = [
    {name: 'group1', keywords: [], ads: [], selected: false},
    {name: 'group2', keywords: [], ads: [], selected: false},
    {name: 'group3', keywords: [], ads: [], selected: false}
  ];

  $scope.states = [
    {name: 'Alabama', selected: false},
    {name: 'Alaska', selected: false},
    {name: 'Arizona', selected: false},
    {name: 'Arkansas', selected: false},
    {name: 'California', selected: false},
    {name: 'Colorado', selected: false},
    {name: 'Connecticut', selected: false},
    {name: 'Delaware', selected: false},
    {name: 'Florida', selected: false},
    {name: 'Georgia', selected: false},
    {name: 'Hawaii', selected: false},
    {name: 'Idaho', selected: false},
    {name: 'Illinois', selected: false},
    {name: 'Indiana', selected: false},
    {name: 'Iowa', selected: false},
    {name: 'Kansas', selected: false},
    {name: 'Kentucky', selected: false},
    {name: 'Louisiana', selected: false},
    {name: 'Maine', selected: false},
    {name: 'Maryland', selected: false},
    {name: 'Massachusetts', selected: false},
    {name: 'Michigan', selected: false},
    {name: 'Minnesota', selected: false},
    {name: 'Mississippi', selected: false},
    {name: 'Missouri', selected: false},
    {name: 'Montana', selected: false},
    {name: 'Nebraska', selected: false},
    {name: 'Nevada', selected: false},
    {name: 'New Hampshire', selected: false},
    {name: 'New Jersey', selected: false},
    {name: 'New Mexico', selected: false},
    {name: 'New York', selected: false},
    {name: 'North Carolina', selected: false},
    {name: 'North Dakota', selected: false},
    {name: 'Ohio', selected: false},
    {name: 'Oklahoma', selected: false},
    {name: 'Oregon', selected: false},
    {name: 'Pennsylvania', selected: false},
    {name: 'Rhode Island', selected: false},
    {name: 'South Carolina', selected: false},
    {name: 'South Dakota', selected: false},
    {name: 'Tennessee', selected: false},
    {name: 'Texas', selected: false},
    {name: 'Utah', selected: false},
    {name: 'Vermont', selected: false},
    {name: 'Virginia', selected: false},
    {name: 'Washington', selected: false},
    {name: 'West Virginia', selected: false},
    {name: 'Wisconsin', selected: false},
    {name: 'Wyoming', selected: false}
  ];

  $scope.deleteAdGroup = function (adgroup) {
    $scope.adgroups.splice($scope.adgroups.indexOf(adgroup), 1);
  };

  $scope.saveAssignAdGroup = function () {
    alert("Code to Save Selected State and Ad Groups");
    $('#createAdGroup').hide();
    $('#assignAdGroup').hide();
    $('#adGroupDisplay').show();
  };

  $scope.saveCreateAdGroup = function () {
    $scope.adgroups.push({name: $scope.addName});
    $scope.addName = "";
    $('#createAdGroup').hide();
    $('#assignAdGroup').hide();
    $('#adGroupDisplay').show();
  };

  $scope.showCreateAdGroup = function () {
    $('#adGroupDisplay').hide();
    $('#assignAdGroup').hide();
    $('#createAdGroup').show();
  };

  $scope.showHome = function () {
    $('#adGroupDisplay').show();
    $('#createAdGroup').hide();
    $('#assignAdGroup').hide();
  };

  $scope.showAssignAdGroup = function () {
    $('#adGroupDisplay').hide();
    $('#createAdGroup').hide();
    $('#assignAdGroup').show();
  };

  /* $scope.addState=function(state){
   alert('update states object and mark selection as true');
   }

   $scope.removeState=function(state){
   alert('update states object and mark selection as false');
   }

   $scope.addAdGroup=function(adgroup){
   alert('update adgroups object and mark selection as true');
   }

   $scope.removeAdGroup=function(adgroup){
   alert('update adgroups object and mark selection as false');
   }

   $scope.addAd=function(ad){
   alert('update ads object and mark selection as true');
   }

   $scope.removeAd=function(ad){
   alert('update ads object and mark selection as false');
   }

   $scope.addKeyword=function(keyword){
   alert('update keywords object and mark selection as true');
   }

   $scope.removeKeyword=function(keyword){
   alert('update keywords object and mark selection as false');
   }*/
}