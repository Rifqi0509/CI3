<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Domain extends CI_Controller {

    public function tata_kelola() {
        $this->load->view('domain/tata-kelola');
    }
    public function __construct() {
        parent::__construct();
        $this->load->helper('url'); // Pastikan helper url dimuat
    }

    public function index() {
        $this->load->view('templates/header');
        $this->load->view('domain/tata-kelola');
        $this->load->view('templates/footer');
    }
}
