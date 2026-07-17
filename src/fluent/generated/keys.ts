import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "eba3a4f30ea949b284bbd3c53ea2f1df"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "a23de3fe3bac42fe870b108b02606d68"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "7ebfa30c908549488af50eee88e2db07"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "8e7680d4a30b4e7eb8addea2ffeb8b24"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "6eda8922aa14470ca0b67b81b936dcf1",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "979fd46059ce4b06bce3f9adefc85779",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "f26eba6ba7ac44e682253200d0b1e621",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
