<?php
/**
 * Created by PhpStorm.
 * User: Michaëlya
 * Date: 2016-08-09
 * Time: 11:47
 */

class Cosmo {
    /*
     * globals
     */
    public $user="root";
    public $password="";
    public $database = "cosmo_world";
    public $host = "127.0.0.1";
    public $table = "cosmo_world.itemsbag";
    public $formTitel="Contentbag";

    public $link;

    /*
     * Connect to database
     */
    public function connectDb() {
        $this->link = mysqli_connect($this->host, $this->user, $this->password);
        mysqli_select_db($this->link, $this->database);
        if (!$this->link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }
    }

    /*
     * List items
     */

    public function get() {
        $sql = "SELECT * FROM {$this->table}";
        $result = mysqli_query($this->link, $sql);
        if (!$result) {
            echo "No results for items";
            exit;
        }
        $items = array();
        while($row = mysqli_fetch_array($result)) {
            $items[] = $row;
        }
        return $items;
    }

    /*
    * Close database
    */

    public function close() {
        mysqli_close($this->link);
    }

    /*
     * Add or update item
     */

    public function addItem() {
        $sql = "INSERT INTO {$this->table}
              (itemName, itemDescr, itemAbi, itemHit, itemHeal)
              VALUES(?,?,?,?,?)";

        $stmt = mysqli_prepare($this->link, $sql);
        if (!$stmt) {
            echo "Error add item";
            exit;
        }
        mysqli_stmt_bind_param($stmt, "sssss",$_GET['itemName'], $_GET['itemDescr'], $_GET['itemAbi'], $_GET['itemHit'], $_GET['itemHeal']);
        mysqli_stmt_execute($stmt);
    }

    public function updateItem($id) {
        $sql = " UPDATE {$this->table}
        SET itemName=?, itemDescr=?, itemAbi=?, itemHit=?, itemHeal=?
        WHERE id=?";
        $stmt = mysqli_prepare($this->link, $sql);
        if (!$stmt) {
            echo "Error update";
            exit;
        }
        mysqli_stmt_bind_param($stmt, "sssssi",
            $_GET['itemName'],
            $_GET['itemDescr'],
            $_GET['itemAbi'],
            $_GET['itemHit'],
            $_GET['itemHeal'],
            $_GET ['id']);
        mysqli_stmt_execute($stmt);
    }
    /*
     * Delete item
     */
    public function delete($id) {
        $sql = "DELETE FROM {$this->table} WHERE id=" . $id;
        mysqli_query($this->link, $sql);
    }
    /*
     * Edit item
     */
    public function edit($id) {
        $sql = "SELECT * FROM {$this->table} WHERE id=$id";
        $result = mysqli_query($this->link, $sql);
        if (!$result) {
            echo "No results for items";
            exit;
        }

        $items = array();
        while($row = mysqli_fetch_array($result)) {
            $items[] = $row;
        }
        if (count($items) != 1) {
            echo 'Error.' . count($items) . ' items (must be 1).';
        }
        return $items[0];
    }

}
?>
