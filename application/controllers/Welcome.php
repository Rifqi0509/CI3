<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{
		$this->load->model('Carousel_model');
		$data['carousel_items'] = $this->Carousel_model->get_carousel_items();
		$this->load->view('templates/header');
		$this->load->view('welcome_message', $data);
		$this->load->view('templates/footer');
	}
	
	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
	}
	
}