<?php
class Carousel_model extends CI_Model {
public function get_carousel_items() {
    $query = $this->db->get('carousel_items');
    return $query->result();
}
}
