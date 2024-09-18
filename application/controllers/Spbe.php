<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Spbe extends CI_Controller {

    public function regulasi_spbe() {
        $this->load->view('templates/header');
        $this->load->view('detail/spbe/regulasi');
        $this->load->view('templates/footer');
    }
    public function sop_spbe() {
        $this->load->view('templates/header');
        $this->load->view('detail/spbe/sop');
        $this->load->view('templates/footer');
    }
    public function peta_rencana_spbe() {
        $this->load->view('templates/header');
        $this->load->view('detail/spbe/peta_rencana');
        $this->load->view('templates/footer');
    }
    public function indikator_evaluasi_spbe()
	{
		$this->load->view('/templates/header');
		$this->load->view('detail/spbe/indikator_evaluasi');
		$this->load->view('/templates/footer');
	}
    public function paparan_spbe()
	{
		$this->load->view('/templates/header');
		$this->load->view('detail/spbe/paparan');
		$this->load->view('/templates/footer');
	}
    public function agenda_spbe()
	{
		$this->load->view('/templates/header');
		$this->load->view('detail/spbe/agenda');
		$this->load->view('/templates/footer');
	}
}
