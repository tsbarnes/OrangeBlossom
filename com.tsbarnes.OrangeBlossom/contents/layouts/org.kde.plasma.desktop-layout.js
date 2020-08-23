var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "bgColor": "Crystal",
                            "cpuCritTemp": "100",
                            "cpuHighTemp": "70",
                            "logo": "Kubuntu",
                            "skin": "Column"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.simpleMonitor",
                    "title": "Simple Monitor"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "Applet-485:1648,32,240,480,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "758",
                    "ToolBoxButtonY": "24"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/thea/Pictures/Wallpapers/background-grunge-wallpaper-pink.jpg",
                    "SlidePaths": "/usr/share/plasma/wallpapers\\,/usr/share/wallpapers\\,/home/thea/Pictures/Wallpapers"
                },
                "/Wallpaper/org.kde.latte.slideshow/General": {
                    "Image": "file:///home/thea/Pictures/Wallpapers/SCBlueDarkWallpaper.png",
                    "SlidePaths": "/usr/share/plasma/wallpapers,/usr/share/wallpapers,/home/thea/Pictures/Wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "switchTabsOnHover": "false"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "noWindowType": "desktopName",
                            "showApplicationIcon": "true",
                            "textType": "1"
                        },
                        "/Configuration/General": {
                            "bold": "true",
                            "showApplicationIcon": "true",
                            "textType": "1"
                        }
                    },
                    "plugin": "org.communia.apptitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        },
                        "/Configuration/Configuration/General": {
                            "length": "1025"
                        },
                        "/Configuration/General": {
                            "length": "1025"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "92"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "55"
                        }
                    },
                    "plugin": "gr.ictpro.jsalatas.plasma.pstate"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "dateFormat": "longDate",
                            "enabledCalendarPlugins": "/usr/lib/x86_64-linux-gnu/qt5/plugins/plasmacalendarplugins/astronomicalevents.so,/usr/lib/x86_64-linux-gnu/qt5/plugins/plasmacalendarplugins/holidaysevents.so,/usr/lib/x86_64-linux-gnu/qt5/plugins/plasmacalendarplugins/pimevents.so",
                            "showDate": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "75",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "52"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "showFace": "true",
                            "showName": "false"
                        },
                        "/Configuration/General": {
                            "showName": "false",
                            "showSett": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.uswitcher"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                }
            },
            "height": 1.3333333333333333,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
