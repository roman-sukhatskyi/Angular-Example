/**
 * Created by Roma on 11.01.2017.
 */
var app = angular.module('myModule', []);

app.directive("mailBlock", function(){
    return {
        restrict: 'E',
        templateUrl: 'mail-block.html'
    }
})

app.controller("MailController", function () {
    this.typeMenuMail = {
        inbox: "Вхідні",
        drafts: "Чернетки",
        send: "Надіслані",
        spam: "Спам",
        delete: "Видалені",
        starred: "Відмічені",
        unread: "Непрочитані"
    }
})