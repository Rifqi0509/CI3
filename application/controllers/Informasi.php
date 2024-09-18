<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Informasi extends CI_Controller {

    public function indeks_spbe() {
        $this->load->view('templates/header');
        $this->load->view('informasi/indeks');
        $this->load->view('templates/footer');
    }
    public function smart_spbe() {
        $this->load->view('templates/header');
        $this->load->view('informasi/smart_city');
        $this->load->view('templates/footer');
    }
    public function sosialisasi_spbe() {
        $this->load->view('templates/header');
        $this->load->view('informasi/sosialisasi');
        $this->load->view('templates/footer');
    }
    public function aplikasi_spbe() {
        $this->load->view('templates/header');
        $this->load->view('informasi/aplikasi');
        $this->load->view('templates/footer');
    }
    public function seminar_spbe() {
        $this->load->view('templates/header');
        $this->load->view('informasi/seminar');
        $this->load->view('templates/footer');
    }
    public function launching_spbe() {
        $this->load->view('templates/header');
        $this->load->view('informasi/launching');
        $this->load->view('templates/footer');
    }
}
