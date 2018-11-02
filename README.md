# domparser

Dom Parser by Shounak Itraj

This tool parsers the dom tree in browser and converts the tree into JSON readable format.

### How to Use:
1. Open required website in browser window
2. Go to 'Console' in 'Inspect Element'
3. Run this tool in console.

### Installation:

Type the following in the terminal.

git clone https://github.com/shounakitraj/domparser.git /opt/bannerdetect

This tool is writte in javascript and can run on any browser.

### Description:

This tool converts the Document Object Model (DOM) tree into JSON object. It is useful, when the other tools cannot read DOM tree directly. It can be used in this case where it parses the DOM tree directly after browser renders the response.

You can use this tool to parse the DOM tree into JSON format and read the JSON output by your other tool to find the XSS reflection. It maintains the tree structure of DOM as it is, and it also maintains all the attributes and their values of the HTML tags from DOM.

### Sample Output:

Following output is of my local XAMPP Server

```
{
  "tag": "HTML",
  "children": [
    {
      "tag": "HEAD",
      "children": [
        {
          "tag": "META",
          "charset": "utf-8"
        },
        {
          "tag": "META",
          "content": "IE=edge,chrome=1",
          "http-equiv": "X-UA-Compatible"
        },
        {
          "tag": "META",
          "name": "viewport",
          "content": "width=device-width, initial-scale=1.0"
        },
        {
          "tag": "TITLE",
          "Welcome to XAMPP": "Welcome to XAMPP"
        },
        {
          "tag": "META",
          "name": "description",
          "content": "XAMPP is an easy to install Apache distribution containing MariaDB, PHP and Perl."
        },
        {
          "tag": "META",
          "name": "keywords",
          "content": "xampp, apache, php, perl, mariadb, open source distribution"
        },
        {
          "tag": "LINK",
          "href": "/dashboard/stylesheets/normalize.css",
          "rel": "stylesheet",
          "type": "text/css"
        },
        {
          "tag": "LINK",
          "href": "/dashboard/stylesheets/all.css",
          "rel": "stylesheet",
          "type": "text/css"
        },
        {
          "tag": "LINK",
          "href": "//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css",
          "rel": "stylesheet",
          "type": "text/css"
        },
        {
          "tag": "SCRIPT",
          "id": "facebook-jssdk",
          "src": "//connect.facebook.net/en_US/all.js#xfbml=1&appId=277385395761685"
        },
        {
          "tag": "SCRIPT",
          "src": "/dashboard/javascripts/modernizr.js",
          "type": "text/javascript"
        },
        {
          "tag": "LINK",
          "href": "/dashboard/images/favicon.png",
          "rel": "icon",
          "type": "image/png"
        },
        {
          "tag": "META",
          "class": "foundation-mq-small"
        },
        {
          "tag": "META",
          "class": "foundation-mq-medium"
        },
        {
          "tag": "META",
          "class": "foundation-mq-large"
        },
        {
          "tag": "META",
          "class": "foundation-mq-xlarge"
        },
        {
          "tag": "META",
          "class": "foundation-mq-xxlarge"
        },
        {
          "tag": "STYLE"
        },
        {
          "tag": "META",
          "class": "foundation-mq-topbar"
        },
        {
          "tag": "STYLE",
          ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#1d3c78;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}\n.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2_mobile_chat_started{animation-duration:300ms;animation-name:fb_bounce_in_v2_mobile_chat_started;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2_mobile_chat_started{animation-duration:300ms;animation-name:fb_bounce_out_v2_mobile_chat_started;transition-timing-function:ease-in}.fb_customer_chat_bubble_pop_in{animation-duration:250ms;animation-name:fb_customer_chat_bubble_bounce_in_animation}.fb_customer_chat_bubble_animated_no_badge{box-shadow:0 3px 12px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_no_badge:hover{box-shadow:0 5px 24px rgba(0, 0, 0, .3)}.fb_customer_chat_bubble_animated_with_badge{box-shadow:-5px 4px 14px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_with_badge:hover{box-shadow:-5px 8px 24px rgba(0, 0, 0, .2)}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_mobile_overlay_active{background-color:#fff;height:100%;overflow:hidden;position:fixed;visibility:hidden;width:100%}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_v2_mobile_chat_started{0%{opacity:0;top:20px}100%{opacity:1;top:0}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_v2_mobile_chat_started{0%{opacity:1;top:0}100%{opacity:0;top:20px}}@keyframes fb_customer_chat_bubble_bounce_in_animation{0%{bottom:6pt;opacity:0;transform:scale(0, 0);transform-origin:center}70%{bottom:18pt;opacity:1;transform:scale(1.2, 1.2)}100%{transform:scale(1, 1)}}": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#1d3c78;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}\n.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2_mobile_chat_started{animation-duration:300ms;animation-name:fb_bounce_in_v2_mobile_chat_started;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2_mobile_chat_started{animation-duration:300ms;animation-name:fb_bounce_out_v2_mobile_chat_started;transition-timing-function:ease-in}.fb_customer_chat_bubble_pop_in{animation-duration:250ms;animation-name:fb_customer_chat_bubble_bounce_in_animation}.fb_customer_chat_bubble_animated_no_badge{box-shadow:0 3px 12px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_no_badge:hover{box-shadow:0 5px 24px rgba(0, 0, 0, .3)}.fb_customer_chat_bubble_animated_with_badge{box-shadow:-5px 4px 14px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_with_badge:hover{box-shadow:-5px 8px 24px rgba(0, 0, 0, .2)}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_mobile_overlay_active{background-color:#fff;height:100%;overflow:hidden;position:fixed;visibility:hidden;width:100%}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_v2_mobile_chat_started{0%{opacity:0;top:20px}100%{opacity:1;top:0}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_v2_mobile_chat_started{0%{opacity:1;top:0}100%{opacity:0;top:20px}}@keyframes fb_customer_chat_bubble_bounce_in_animation{0%{bottom:6pt;opacity:0;transform:scale(0, 0);transform-origin:center}70%{bottom:18pt;opacity:1;transform:scale(1.2, 1.2)}100%{transform:scale(1, 1)}}",
          "type": "text/css"
        }
      ],
      "\n    ": "\n    ",
      "\n\n    ": "\n\n    ",
      " Always force latest IE rendering engine or request Chrome Frame ": " Always force latest IE rendering engine or request Chrome Frame ",
      " Use title if it's in the page YAML frontmatter ": " Use title if it's in the page YAML frontmatter ",
      "\n\n\n    ": "\n\n\n    ",
      "\n\n\n  ": "\n\n\n  "
    },
    {
      "tag": "BODY",
      "children": [
        {
          "tag": "DIV",
          "children": [
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "IFRAME",
                      "name": "fb_xdm_frame_https",
                      "allowtransparency": "true",
                      "allowfullscreen": "true",
                      "scrolling": "no",
                      "allow": "encrypted-media",
                      "id": "fb_xdm_frame_https",
                      "aria-hidden": "true",
                      "title": "Facebook Cross Domain Communication Frame",
                      "tabindex": "-1",
                      "style": "border: medium none;",
                      "src": "https://staticxx.facebook.com/connect/xd_arbiter/r/__Bz3h5RzMx.js?version=42#channel=f372c4caa80dec&origin=http%3A%2F%2Flocalhost",
                      "frameborder": "0"
                    }
                  ]
                }
              ],
              "style": "position: absolute; top: -10000px; height: 0px; width: 0px;"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "IFRAME",
                      "name": "fe6b5fc0a75054",
                      "allowtransparency": "true",
                      "allowfullscreen": "true",
                      "scrolling": "no",
                      "allow": "encrypted-media",
                      "style": "display: none;",
                      "src": "https://www.facebook.com/connect/ping?client_id=277385395761685&domain=localhost&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Df330fa707e2e882%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%252Ff372c4caa80dec%26relation%3Dparent&response_type=token%2Csigned_request&sdk=joey&version",
                      "frameborder": "0"
                    }
                  ]
                }
              ],
              "style": "position: absolute; top: -10000px; height: 0px; width: 0px;"
            }
          ],
          "id": "fb-root",
          "class": " fb_reset"
        },
        {
          "tag": "SCRIPT",
          "(function(d, s, id) {\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) return;\n      js = d.createElement(s); js.id = id;\n      js.src = \"//connect.facebook.net/en_US/all.js#xfbml=1&appId=277385395761685\";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(document, 'script', 'facebook-jssdk'));": "(function(d, s, id) {\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) return;\n      js = d.createElement(s); js.id = id;\n      js.src = \"//connect.facebook.net/en_US/all.js#xfbml=1&appId=277385395761685\";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(document, 'script', 'facebook-jssdk'));"
        },
        {
          "tag": "DIV",
          "children": [
            {
              "tag": "NAV",
              "children": [
                {
                  "tag": "UL",
                  "children": [
                    {
                      "tag": "LI",
                      "children": [
                        {
                          "tag": "H1",
                          "children": [
                            {
                              "tag": "A",
                              "Apache Friends": "Apache Friends",
                              "href": "/dashboard/index.html"
                            }
                          ]
                        }
                      ],
                      "\n            ": "\n            ",
                      "\n          ": "\n          ",
                      "class": "name"
                    },
                    {
                      "tag": "LI",
                      "children": [
                        {
                          "tag": "A",
                          "children": [
                            {
                              "tag": "SPAN",
                              "Menu": "Menu"
                            }
                          ],
                          "\n              ": "\n              ",
                          "\n            ": "\n            ",
                          "href": "#"
                        }
                      ],
                      "\n            ": "\n            ",
                      "\n          ": "\n          ",
                      "class": "toggle-topbar menu-icon"
                    }
                  ],
                  "\n          ": "\n          ",
                  "\n        ": "\n        ",
                  "class": "title-area"
                },
                {
                  "tag": "SECTION",
                  "children": [
                    {
                      "tag": "UL",
                      "children": [
                        {
                          "tag": "LI",
                          "children": [
                            {
                              "tag": "A",
                              "Applications": "Applications",
                              "href": "/applications.html"
                            }
                          ],
                          "class": ""
                        },
                        {
                          "tag": "LI",
                          "children": [
                            {
                              "tag": "A",
                              "FAQs": "FAQs",
                              "href": "/dashboard/faq.html"
                            }
                          ],
                          "class": ""
                        },
                        {
                          "tag": "LI",
                          "children": [
                            {
                              "tag": "A",
                              "HOW-TO Guides": "HOW-TO Guides",
                              "href": "/dashboard/howto.html"
                            }
                          ],
                          "class": ""
                        },
                        {
                          "tag": "LI",
                          "children": [
                            {
                              "tag": "A",
                              "PHPInfo": "PHPInfo",
                              "target": "_blank",
                              "href": "/dashboard/phpinfo.php"
                            }
                          ],
                          "class": ""
                        },
                        {
                          "tag": "LI",
                          "children": [
                            {
                              "tag": "A",
                              "phpMyAdmin": "phpMyAdmin",
                              "href": "/phpmyadmin/"
                            }
                          ],
                          "class": ""
                        }
                      ],
                      "\n              ": "\n              ",
                      "\n          ": "\n          ",
                      "class": "right"
                    }
                  ],
                  "\n          ": "\n          ",
                  " Right Nav Section ": " Right Nav Section ",
                  "\n        ": "\n        ",
                  "class": "top-bar-section"
                }
              ],
              "\n        ": "\n        ",
              "\n\n        ": "\n\n        ",
              "\n      ": "\n      ",
              "class": "top-bar",
              "data-topbar": ""
            }
          ],
          "\n      ": "\n      ",
          "\n    ": "\n    ",
          "class": "contain-to-grid"
        },
        {
          "tag": "DIV",
          "children": [
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "DIV",
                      "children": [
                        {
                          "tag": "H1",
                          "children": [
                            {
                              "tag": "IMG",
                              "src": "/dashboard/images/xampp-logo.svg"
                            },
                            {
                              "tag": "SPAN",
                              "Apache + MariaDB + PHP + Perl": "Apache + MariaDB + PHP + Perl"
                            }
                          ],
                          "XAMPP ": "XAMPP "
                        }
                      ],
                      "\n      ": "\n      ",
                      "\n    ": "\n    ",
                      "class": "large-12 columns"
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "row"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "hero"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "H2",
                      "Welcome to XAMPP for Windows 7.1.6": "Welcome to XAMPP for Windows 7.1.6"
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "P",
                      "children": [
                        {
                          "tag": "A",
                          "FAQs": "FAQs",
                          "href": "/dashboard/faq.html"
                        },
                        {
                          "tag": "A",
                          "HOW-TO Guides": "HOW-TO Guides",
                          "href": "/dashboard/howto.html"
                        }
                      ],
                      "\n      You have successfully installed XAMPP on this system! Now you can start using Apache, MariaDB, PHP and other components.\n      You can find more info in the ": "\n      You have successfully installed XAMPP on this system! Now you can start using Apache, MariaDB, PHP and other components.\n      You can find more info in the ",
                      " section or check the ": " section or check the ",
                      " for getting started with PHP applications.\n    ": " for getting started with PHP applications.\n    "
                    },
                    {
                      "tag": "P",
                      "children": [
                        {
                          "tag": "A",
                          "FAQs": "FAQs",
                          "href": "/dashboard/faq.html"
                        },
                        {
                          "tag": "A",
                          "WAMP": "WAMP",
                          "href": "https://bitnami.com/stack/wamp"
                        },
                        {
                          "tag": "A",
                          "MAMP": "MAMP",
                          "href": "https://bitnami.com/stack/mamp"
                        },
                        {
                          "tag": "A",
                          "LAMP": "LAMP",
                          "href": "https://bitnami.com/stack/lamp"
                        }
                      ],
                      "\n      XAMPP is meant only for development purposes. It has certain configuration settings that make it easy to develop locally but that are insecure if you want to have your installation accessible to others.\n      If you want have your XAMPP accessible from the internet, make sure you understand the implications and you checked the ": "\n      XAMPP is meant only for development purposes. It has certain configuration settings that make it easy to develop locally but that are insecure if you want to have your installation accessible to others.\n      If you want have your XAMPP accessible from the internet, make sure you understand the implications and you checked the ",
                      " to learn how to protect your site. Alternatively you can use ": " to learn how to protect your site. Alternatively you can use ",
                      ", ": ", ",
                      " or ": " or ",
                      " which are similar packages which are more suitable for production.\n    ": " which are similar packages which are more suitable for production.\n    "
                    },
                    {
                      "tag": "P",
                      "\n      Start the XAMPP Control Panel to check the server status.\n    ": "\n      Start the XAMPP Control Panel to check the server status.\n    "
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "H3",
                      "Community": "Community"
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "P",
                      "children": [
                        {
                          "tag": "A",
                          "Forums": "Forums",
                          "href": "https://community.apachefriends.org"
                        },
                        {
                          "tag": "A",
                          "Mailing List": "Mailing List",
                          "href": "https://www.apachefriends.org/community.html#mailing_list"
                        },
                        {
                          "tag": "A",
                          "Facebook": "Facebook",
                          "href": "https://www.facebook.com/we.are.xampp"
                        },
                        {
                          "tag": "A",
                          "Twitter": "Twitter",
                          "href": "https://twitter.com/apachefriends"
                        },
                        {
                          "tag": "A",
                          "Google+": "Google+",
                          "href": "https://plus.google.com/+xampp/posts"
                        }
                      ],
                      "\n      XAMPP has been around for more than 10 years – there is a huge community behind it. You can get involved by joining our ": "\n      XAMPP has been around for more than 10 years – there is a huge community behind it. You can get involved by joining our ",
                      ", adding yourself to the ": ", adding yourself to the ",
                      ", and liking us on ": ", and liking us on ",
                      ", following our exploits on ": ", following our exploits on ",
                      ", or adding us to your ": ", or adding us to your ",
                      " circles.\n    ": " circles.\n    "
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "H3",
                      "children": [
                        {
                          "tag": "A",
                          "translate.apachefriends.org": "translate.apachefriends.org",
                          "href": "https://translate.apachefriends.org/"
                        }
                      ],
                      "Contribute to XAMPP translation at ": "Contribute to XAMPP translation at ",
                      ".": "."
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "P",
                      "children": [
                        {
                          "tag": "A",
                          "translate.apachefriends.org": "translate.apachefriends.org",
                          "href": "https://translate.apachefriends.org/"
                        }
                      ],
                      "\n      Can you help translate XAMPP for other community members? We need your help to translate XAMPP into different languages. We have set up a site, ": "\n      Can you help translate XAMPP for other community members? We need your help to translate XAMPP into different languages. We have set up a site, ",
                      ", where users can contribute translations.\n    ": ", where users can contribute translations.\n    "
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "H3",
                      "Install applications on XAMPP using Bitnami": "Install applications on XAMPP using Bitnami"
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "P",
                      "children": [
                        {
                          "tag": "A",
                          "Bitnami XAMPP page": "Bitnami XAMPP page",
                          "target": "_blank",
                          "href": "http://bitnami.com/stack/xampp?utm_source=bitnami&utm_medium=installer&utm_campaign=XAMPP%2BModule"
                        }
                      ],
                      "\n    Apache Friends and Bitnami are cooperating to make dozens of open source applications available on XAMPP, for free. Bitnami-packaged applications include Wordpress, Drupal, Joomla! and dozens of others and can be deployed with one-click installers.\n    Visit the ": "\n    Apache Friends and Bitnami are cooperating to make dozens of open source applications available on XAMPP, for free. Bitnami-packaged applications include Wordpress, Drupal, Joomla! and dozens of others and can be deployed with one-click installers.\n    Visit the ",
                      " for details on the currently available apps.\n    ": " for details on the currently available apps.\n    "
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            },
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "A",
                      "children": [
                        {
                          "tag": "IMG",
                          "alt": "Bitnami XAMPP page",
                          "src": "/dashboard/images/bitnami-xampp.png"
                        }
                      ],
                      "href": "http://bitnami.com/stack/xampp?utm_source=bitnami&utm_medium=installer&utm_campaign=XAMPP%2BModule",
                      "target": "_blank"
                    }
                  ],
                  "\n    ": "\n    ",
                  "\n  ": "\n  ",
                  "class": "large-12 columns"
                }
              ],
              "\n  ": "\n  ",
              "\n": "\n",
              "class": "row"
            }
          ],
          "\n      ": "\n      ",
          "\n": "\n",
          "\n\n    ": "\n\n    ",
          "id": "wrapper"
        },
        {
          "tag": "FOOTER",
          "children": [
            {
              "tag": "DIV",
              "children": [
                {
                  "tag": "DIV",
                  "children": [
                    {
                      "tag": "DIV",
                      "children": [
                        {
                          "tag": "DIV",
                          "children": [
                            {
                              "tag": "UL",
                              "children": [
                                {
                                  "tag": "LI",
                                  "children": [
                                    {
                                      "tag": "A",
                                      "Follow us on Twitter": "Follow us on Twitter",
                                      "href": "https://twitter.com/apachefriends"
                                    }
                                  ],
                                  "class": "twitter"
                                },
                                {
                                  "tag": "LI",
                                  "children": [
                                    {
                                      "tag": "A",
                                      "Like us on Facebook": "Like us on Facebook",
                                      "href": "https://www.facebook.com/we.are.xampp"
                                    }
                                  ],
                                  "class": "facebook"
                                },
                                {
                                  "tag": "LI",
                                  "children": [
                                    {
                                      "tag": "A",
                                      "Add us to your G+ Circles": "Add us to your G+ Circles",
                                      "href": "https://plus.google.com/+xampp/posts"
                                    }
                                  ],
                                  "class": "google"
                                }
                              ],
                              "\n  ": "\n  ",
                              "\n": "\n",
                              "class": "social"
                            },
                            {
                              "tag": "UL",
                              "children": [
                                {
                                  "tag": "LI",
                                  "children": [
                                    {
                                      "tag": "A",
                                      "Blog": "Blog",
                                      "href": "https://www.apachefriends.org/blog.html"
                                    }
                                  ]
                                },
                                {
                                  "tag": "LI",
                                  "children": [
                                    {
                                      "tag": "A",
                                      "Privacy Policy": "Privacy Policy",
                                      "href": "https://www.apachefriends.org/privacy_policy.html"
                                    }
                                  ]
                                },
                                {
                                  "tag": "LI",
                                  "children": [
                                    {
                                      "tag": "A",
                                      "children": [
                                        {
                                          "tag": "IMG",
                                          "data-2x": "/dashboard/images/fastly-logo@2x.png",
                                          "src": "/dashboard/images/fastly-logo.png",
                                          "width": "48"
                                        }
                                      ],
                                      "                    CDN provided by\n                    ": "                    CDN provided by\n                    ",
                                      "\n": "\n",
                                      "target": "_blank",
                                      "href": "http://www.fastly.com/"
                                    }
                                  ],
                                  "\n": "\n",
                                  "                ": "                "
                                }
                              ],
                              "\n                ": "\n                ",
                              "\n              ": "\n              ",
                              "class": "inline-list"
                            }
                          ],
                          "\n              ": "\n              ",
                          "\n\n              ": "\n\n              ",
                          "\n            ": "\n            ",
                          "class": "large-8 columns"
                        },
                        {
                          "tag": "DIV",
                          "children": [
                            {
                              "tag": "P",
                              "Copyright (c) 2017, Apache Friends": "Copyright (c) 2017, Apache Friends",
                              "class": "text-right"
                            }
                          ],
                          "\n              ": "\n              ",
                          "\n            ": "\n            ",
                          "class": "large-4 columns"
                        }
                      ],
                      "\n            ": "\n            ",
                      "\n          ": "\n          ",
                      "class": "row"
                    }
                  ],
                  "\n          ": "\n          ",
                  "\n        ": "\n        ",
                  "class": "large-12 columns"
                }
              ],
              "\n        ": "\n        ",
              "\n      ": "\n      ",
              "class": "row"
            }
          ],
          "\n      ": "\n      ",
          "\n    ": "\n    "
        },
        {
          "tag": "SCRIPT",
          "src": "//code.jquery.com/jquery-1.10.2.min.js"
        },
        {
          "tag": "SCRIPT",
          "src": "/dashboard/javascripts/all.js",
          "type": "text/javascript"
        }
      ],
      "\n    ": "\n    ",
      "\n\n    ": "\n\n    ",
      " JS Libraries ": " JS Libraries ",
      "\n  \n\n": "\n  \n\n",
      "class": "index"
    }
  ],
  "\n\n  ": "\n\n  ",
  "style": "",
  "class": " js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths",
  "lang": "en"
}
```
