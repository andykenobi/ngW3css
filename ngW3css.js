var ngw3css = angular.module("ngW3css", []);
ngw3css.directive("w3HideTarget", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            var hide = function() {
                var target = attr.w3HideTarget;
                angular.element(document.querySelectorAll(target)).addClass("w3-hide");
                angular.element(document.querySelectorAll(target)).removeClass("w3-show");
            }
            elem.bind("click", hide);
        }
    }
});

ngw3css.directive("w3ShowTarget", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            var show = function() {
                var target = attr.w3ShowTarget;
                angular.element(document.querySelectorAll(target)).addClass("w3-show");
                angular.element(document.querySelectorAll(target)).removeClass("w3-hide");
            }
            elem.bind("click", show);
        }
    }
});

ngw3css.directive("w3ToggleTarget", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            var toggle = function() {
                var target = attr.w3ToggleTarget;
                angular.element(document.querySelectorAll(target)).toggleClass("w3-show");
                angular.element(document.querySelectorAll(target)).toggleClass("w3-hide");
            }
            elem.bind("click", toggle);
        }
    }
});

ngw3css.directive("w3Sidenav", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attr) {
            var size = attr.w3SidenavSize || "15%";
            elem.css("width", size);
            elem.css("z-index", "5");
            elem.css("display", "none");
            // elem.addClass("w3-hide");

            var hide = function() {
                angular.element(document.querySelectorAll(".w3-sidenav")).css("display", "none");
                angular.element(document.querySelectorAll(".w3-overlay")).css("display", "none");
                // angular.element(document.querySelectorAll(".w3-sidenav")).addClass("w3-hide");
                // angular.element(document.querySelectorAll(".w3-overlay")).addClass("w3-hide");

                if (attr.w3Sidenav == "push") {
                    angular.element(document.querySelectorAll("main")).removeClass("w3-animate-left");
                    angular.element(document.querySelectorAll("main")).css("marginLeft", "0");
                }
            }

            var show = function() {
                angular.element(document.querySelectorAll(".w3-sidenav")).css("display", "block");
                angular.element(document.querySelectorAll(".w3-overlay")).css("display", "block");
                // angular.element(document.querySelectorAll(".w3-sidenav")).removeClass("w3-hide");
                // angular.element(document.querySelectorAll(".w3-overlay")).removeClass("w3-hide");

                if (attr.w3Sidenav == "push") {
                    angular.element(document.querySelectorAll("main")).css("marginLeft", elem.css("width"));
                    angular.element(document.querySelectorAll("main")).addClass("w3-animate-left");
                }
            }

            angular.element(document.querySelectorAll(".w3-opennav")).bind("click", show);
            angular.element(document.querySelectorAll(".w3-closenav")).bind("click", hide);
            angular.element(document.querySelectorAll(".w3-overlay")).bind("click", hide);
        }
    }
});

// ngw3css.directive("w3Modal", function() {
//     return {
//         restrict: "A",
//         link: function(scope, elem, attr) {
//             angular.element(document.querySelectorAll("body")).css("overflow", "hidden");
//         }
//     }
// });
