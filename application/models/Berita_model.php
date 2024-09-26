<?php
class Berita_model extends CI_Model {
    public function get_berita_by_kategori($id_kategori) {
        $this->db->where('id_kategori', $id_kategori);
        $query = $this->db->get('berita');
        return $query->result();
    }
}
