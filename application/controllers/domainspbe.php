<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class domainspbe extends CI_Controller {

	public function kebijakanspbe()
	{
		$this->load->view('/templates/header');
		$this->load->view('/domainspbe/kebijakanspbe');
		$this->load->view('/templates/footer');
	}
	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
	}
}
