<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Domain extends CI_Controller {

    public function tata_kelola() {
        $this->load->view('templates/header');
        $this->load->view('domain/tata-kelola');
        $this->load->view('templates/footer');
    }
    public function manajemen_spbe() {
        $this->load->view('templates/header');
        $this->load->view('domain/manajemen');
        $this->load->view('templates/footer');
    }
    public function layanan_spbe() {
        $this->load->view('templates/header');
        $this->load->view('domain/layanan');
        $this->load->view('templates/footer');
    }
    public function kebijakanspbe()
	{
		$this->load->view('/templates/header');
		$this->load->view('/domain/kebijakanspbe');
		$this->load->view('/templates/footer');
	}
    public function informasi()
	{
		$this->load->view('/templates/header');
		$this->load->view('/domain/informasi_terbaru');
		$this->load->view('/templates/footer');
	}
    public function apaitu_spbe()
	{
		$this->load->view('/templates/header');
		$this->load->view('/domain/apaitu_spbe');
		$this->load->view('/templates/footer');
	}
}
