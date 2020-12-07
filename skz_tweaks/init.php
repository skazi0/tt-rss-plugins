<?php
class Skz_Tweaks extends Plugin {
	private $host;

	function about() {
		return array(1.0,
			"Some customizations and tweaks",
			"skazi");
	}

	function init($host) {
		$this->host = $host;

        $host->add_hook($host::HOOK_HOTKEY_MAP, $this);
	}

    function hook_hotkey_map($hotkeys) {
        $hotkeys["a f"] = "add_to_rssfilter";
        return $hotkeys;
    }

	function get_css() {
		return file_get_contents(__DIR__ . "/init.css");
	}

	function get_js() {
		return file_get_contents(__DIR__ . "/init.js");
	}

	function api_version() {
		return 2;
	}

}
?>
