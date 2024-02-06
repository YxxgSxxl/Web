<?php
require "./model/model.php";

function accueil() {
    require "vue/vueAccueil.php";
}

function apropos() {
    require "vue/vueApropos.php";
}

function adopter() {
    require "vue/vueAdopter.php";
}

function nosactions() {
    require "vue/vueNosactions.php";
}

function contact() {
    require "vue/vueContact.php";
}

function conditions() {
    require "vue/vueConditions.php";
}

function login() {
    require "vue/vueLogin.php";
}

// Debug Inscription
function debugInscription() {
    require "vue/vueRegister.php";
}

function erreur($message) {
    require "vue/vueErreur.php";
}