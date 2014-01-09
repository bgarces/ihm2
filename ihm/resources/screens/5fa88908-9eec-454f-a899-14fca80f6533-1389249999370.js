jQuery("#simulation")
  .on("click", ".s-5fa88908-9eec-454f-a899-14fca80f6533 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/aaacdd86-88ac-4e09-b900-c2c72b96f08b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_1": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#5CC4EA",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_1": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#DFE0DF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/10ae9f0c-0539-495a-8b99-acf895538c72"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_2": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#5CC4EA",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_2": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#DFE0DF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/65094e03-e8bc-4b75-ab4b-c6a78317c79e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_3": {
                      "attributes": {
                        "background-color": "#5CC4EA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#5CC4EA",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_3": {
                      "attributes": {
                        "background-color": "#DFE0DF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5fa88908-9eec-454f-a899-14fca80f6533 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#DFE0DF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b2cc59f1-a678-434b-ab2d-cc4297dbd202"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });