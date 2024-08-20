<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Domain extends CI_Controller {

    public function tata_kelola() {
        $this->load->view('templates/header');
        $this->load->view('domain/tata-kelola');
        $this->load->view('templates/footer');
    }
    public function manajemen() {
        $this->load->vie('templates/header');
        $this->load->vie('templates/manajemen');
        $this->load->vie('templates/footer');
    }
    
}
