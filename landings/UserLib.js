$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / div');
        comp_comp1.code = '<div class="section bg-primary-2">\
    <div class="container">\
        <div class="w-layout-grid grid-40-60">\
            <div class="justify-column-between content-width-small">\
                <div>\
                    <h6 class="subtitle">What we do</h6>\
                    <h3 class="h1">We make you stand out online.</h3>\
                </div>\
                <div class="row">\
                    <a href="contact-1.html" class="button bg-white button-wide w-button">Plan a consultation</a>\
                </div>\
            </div>\
            <div class="w-layout-grid icon-card-grid-halves">\
                <div class="card card-muted content-width-small">\
                    <div class="card-body">\
                        <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d08be6178ef59736d2_sydney-opera-house.svg" alt="" class="icon-large subheading"/>\
                        <h5>Location Services</h5>\
                        <div>We&#x27;re confident in our product and proud of what we create.</div>\
                    </div>\
                </div>\
                <div class="card card-muted content-width-small">\
                    <div class="card-body">\
                        <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87cf160f754c6fea92bd_wigwam.svg" alt="" class="icon-large subheading"/>\
                        <h5>Branding + Identity</h5>\
                        <div>The hard part has been done, simply add your content.</div>\
                    </div>\
                </div>\
                <div class="card card-muted content-width-small">\
                    <div class="card-body">\
                        <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87cf160f750f3eea92bc_school-backpack.svg" alt="" class="icon-large subheading"/>\
                        <h5>Interface Kit</h5>\
                        <div>A solid foundation that scales with your business.</div>\
                    </div>\
                </div>\
                <div class="card card-muted content-width-small">\
                    <div class="card-body">\
                        <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87cfcf53104815bdf505_taxi-on-the-map.svg" alt="" class="icon-large subheading"/>\
                        <h5>Interface Design</h5>\
                        <div>Make your mark with an easily brandable product.</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / div');
        comp_comp2.code = '<div class="announcement-bar bg-gray-1" data-pg-collapsed>\
    <div class="container">\
        <div class="announcement-row">\
            <div class="text-small announcement-text" style="margin: 0 auto;">Need help? We\'re here for you, give us a call: \
                <a href="privacy-policy.html" class="text-white"><b>(250) 777 7787</b></a>\
            </div>\
            <div class="announcement-dismiss">\
                <a href="#" class="button-circle button-circle-small bg-black w-inline-block"><img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5db7b6e6411dd9cb72f3efc7_x.svg" alt="" class="button-icon-small"/></a>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'Comp 3 / div');
        comp_comp3.code = '<div class="navbar-container border-bottom sticky-top" data-pg-collapsed>\
    <div class="container">\
        <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">\
            <div class="navbar-content">\
                <a href="../index.html" class="brand w-nav-brand"><img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dd1ef8aee4246ce2c21966e_logo.svg" alt=""/></a>\
                <a id="w-node-ad8bfaac4081-faac4073" href="https://webflow.com/templates/html/foray-ui-kit-website-template" target="_blank" class="button navbar-centered-button w-inline-block"> <div>View on Webflow</div> </a>\
                <div id="w-node-ad8bfaac4077-faac4073" class="navbar-centered-menu">\
                    <nav role="navigation" class="nav-menu-wrapper w-nav-menu">\
                        <div class="nav-menu">\
                            <a href="../index.html" class="nav-link w-inline-block"> <div class="nav-link-text">Home</div> </a>\
                            <a href="../index.html" class="nav-link w-inline-block"> <div class="nav-link-text">Tour</div> </a>\
                            <a href="../index.html" class="nav-link w-inline-block"> <div class="nav-link-text">Tour</div> </a>\
                        </div>\
                    </nav>\
                    <div class="menu-button w-nav-button">\
                        <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5db7b6e62e950ff9260646b4_menu.svg" alt=""/>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp4 = new PgComponentType('comp4', 'Comp 4 / div');
        comp_comp4.code = '<div class="w-layout-grid split-section-full-width">\
    <div class="split-section-content bg-gray-4">\
        <div class="justify-column-between content-width-medium">\
            <div>\
                <h6 class="subheading">Launch Fast</h6>\
                <h3 class="h1">Build smarter sites in less time.</h3>\
            </div>\
            <div>\
                <p>Create striking pages and present your brand with bold elegance. Foray’s design exudes strength and confidence to put your best work in the spotlight and elevate your brand.</p>\
                <p>Pick and mix from an array of stunningly composed sections to curate an original layout, or build truly unique sections from Foray’s modular UI elements.</p>\
                <a data-w-id="7d4d9d66-93d2-0c05-71f6-3f517e0b1159" href="about-us-1.html" class="underlined-link w-inline-block"> <div>Learn more</div> <div class="link-underline">\
                        <div class="link-underline-animation"></div>\
                    </div> </a>\
            </div>\
        </div>\
    </div>\
    <div class="block-image-wrapper bg-primary-4">\
        <img src="../../assets.website-files.com/5db0fae6ca38713498151c5a/5dd491889fa9b10bf369c376_square-large-07.jpg" srcset="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dd491889fa9b10bf369c376_square-large-07-p-500.jpeg 500w, https://assets.website-files.com/5db0fae6ca38713498151c5a/5dd491889fa9b10bf369c376_square-large-07-p-800.jpeg 800w, https://assets.website-files.com/5db0fae6ca38713498151c5a/5dd491889fa9b10bf369c376_square-large-07-p-1080.jpeg 1080w, https://assets.website-files.com/5db0fae6ca38713498151c5a/5dd491889fa9b10bf369c376_square-large-07.jpg 1428w" sizes="(max-width: 991px) 100vw, (max-width: 2856px) 50vw, 1428px" alt=""/>\
    </div>\
</div>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);
        
        var comp_comp5 = new PgComponentType('comp5', 'Comp 5 / div');
        comp_comp5.code = '<div class="section additional-bottom-space bg-gray-4">\
    <div class="container">\
        <div class="content-width-medium section-title">\
            <h6 class="subtitle">Build it faster</h6>\
            <h3 class="h1">Unlock your site&#x27;s full potential.</h3>\
        </div>\
        <ul class="grid-thirds icon-list-grid-thirds">\
            <li class="icon-list-item">\
                <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d754737607f0e05b7f_wigwam.svg" alt="" class="icon-list-item-icon icon-large"/>\
                <h5 class="no-bottom-space">Your home base</h5>\
            </li>\
            <li class="icon-list-item">\
                <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d78be61763869736f4_school-backpack.svg" alt="" class="icon-list-item-icon icon-large"/>\
                <h5 class="no-bottom-space">Interface kit</h5>\
            </li>\
            <li class="icon-list-item">\
                <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d78be617815d9736f5_sydney-opera-house.svg" alt="" class="icon-list-item-icon icon-large"/>\
                <h5 class="no-bottom-space">Proudly made in Aus</h5>\
            </li>\
            <li class="icon-list-item">\
                <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d78be61763869736f4_school-backpack.svg" alt="" class="icon-list-item-icon icon-large"/>\
                <h5 class="no-bottom-space">Premium support</h5>\
            </li>\
            <li class="icon-list-item">\
                <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d754737607f0e05b7f_wigwam.svg" alt="" class="icon-list-item-icon icon-large"/>\
                <h5 class="no-bottom-space">Easily brandable</h5>\
            </li>\
            <li class="icon-list-item">\
                <img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dcc87d738d58c781aa79a04_taxi-on-the-map.svg" alt="" class="icon-list-item-icon icon-large"/>\
                <h5 class="no-bottom-space">Responsive design</h5>\
            </li>\
        </ul>\
    </div>\
</div>';
        comp_comp5.parent_selector = null;
        f.addComponentType(comp_comp5);
        
        var comp_comp6 = new PgComponentType('comp6', 'Comp 6 / div');
        comp_comp6.code = '<div class="section no-bottom-space">\
    <div class="container">\
        <div class="w-layout-grid split-section reverse-direction">\
            <div id="w-node-0830bb0ef40d-cf77d9e8" class="justify-column-between content-width-small">\
                <div>\
                    <h4 class="h1">Tons of features for your site.</h4>\
                </div>\
                <div>\
                    <ul>\
                        <li class="bulleted-list-item border-bottom">\
                            <div class="list-item-bullet"></div>\
                            <div>A vast collection of components</div>\
                        </li>\
                        <li class="bulleted-list-item border-bottom">\
                            <div class="list-item-bullet"></div>\
                            <div>Superior customer support</div>\
                        </li>\
                        <li class="bulleted-list-item border-bottom">\
                            <div class="list-item-bullet"></div>\
                            <div>Expertly crafted by Medium Rare</div>\
                        </li>\
                        <li class="bulleted-list-item border-bottom no-bottom-space">\
                            <div class="list-item-bullet"></div>\
                            <div>Join over 40,000 satisfied customers</div>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
            <img src="../../assets.website-files.com/5db0fae6ca38713498151c5a/5dd491915472202504758470_square-small-01.jpg" width="494" id="w-node-0830bb0ef425-cf77d9e8" alt="" class="align-self-center"/>\
        </div>\
    </div>\
</div>';
        comp_comp6.parent_selector = null;
        f.addComponentType(comp_comp6);
        
        var comp_comp7 = new PgComponentType('comp7', 'Comp 7 / div');
        comp_comp7.code = '<div class="section overflow-hidden">\
    <div class="container">\
        <div class="w-layout-grid split-section">\
            <div id="w-node-31e71a596da5-cf77d9e8" class="justify-column-between content-width-small">\
                <div>\
                    <h4 class="h1">Ideal for<br/>style-conscious businesses.</h4>\
                    <p>A flexible aesthetic makes Foray the perfect starting point for all websites, from portfolio to product brochure.</p>\
                </div>\
                <div>\
                    <div>\
                        <div class="text-small border-top space-bottom">* Add some extra context to your point with this small feature text.</div>\
                    </div>\
                </div>\
            </div>\
            <img src="../../assets.website-files.com/5db0fae6ca38713498151c5a/5dd49191547220356d75846f_square-small-03.jpg" width="494" id="w-node-31e71a596db1-cf77d9e8" alt="" class="align-self-center"/>\
        </div>\
    </div>\
</div>';
        comp_comp7.parent_selector = null;
        f.addComponentType(comp_comp7);
        
        var comp_comp8 = new PgComponentType('comp8', 'Comp 8 / div');
        comp_comp8.code = '<div class="footer bg-primary-2">\
    <div class="container">\
        <div class="footer-1-top-row">\
            <div class="footer-1-menus">\
                <div>\
                    <a href="../index.html" class="h2 text-link-white">Tour</a>\
                    <a href="../index.html#Landing-Pages" class="h2 text-link-white">Demos</a>\
                    <a href="../template/style-guide.html" class="h2 text-link-white">Style Guide</a>\
                    <a href="https://disqus.com/home/discussion/templatemarketplace/foray_ui_kit_html5_responsive_website_template/" target="_blank" class="h2 text-link-white">Support</a>\
                </div>\
                <div class="footer-menus-wrapper">\
                    <div class="vertical-link-menu">\
                        <a href="../portfolio/case-studies-1.html" class="vertical-link-item text-white">Work</a>\
                        <a href="../company/about-us-1.html" class="vertical-link-item text-white">Our Studio</a>\
                        <a href="../company/contact-2.html" class="vertical-link-item text-white">Contact Us</a>\
                        <a href="../blog/blog.html" class="vertical-link-item text-white">Blog</a>\
                        <a href="../company/careers.html" class="vertical-link-item text-white">Careers</a>\
                    </div>\
                    <div class="vertical-link-menu">\
                        <a href="../template/getting-started.html" class="vertical-link-item text-white">Getting Started</a>\
                        <a href="../template/changelog.html" class="vertical-link-item text-white">Changelog</a>\
                        <a href="../template/licensing.html" class="vertical-link-item text-white">Image License</a>\
                        <a href="https://webflow.com/templates/html/foray-ui-kit-website-template" target="_blank" class="vertical-link-item text-white">View on Webflow</a>\
                    </div>\
                </div>\
            </div>\
            <div class="footer-subscribe-wrapper content-width-small">\
                <div>Subscribe to our bi-weekly newsletter.</div>\
                <div class="w-form">\
                    <form id="wf-form-Footer-Subscribe-Form" name="wf-form-Footer-Subscribe-Form" data-name="Footer Subscribe Form" class="footer-subscribe">\
                        <input type="email" class="form-input form-input-large form-input-white w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Email Address" id="email-2" required=""/>\
                        <input type="submit" value="Subscribe" data-wait="Please wait..." class="button button-large bg-white w-button"/>\
                    </form>\
                    <div class="form-success footer-form-message w-form-done">\
                        <div>Thank you! Your submission has been received!</div>\
                    </div>\
                    <div class="form-error w-form-fail">\
                        <div>Oops! Something went wrong while submitting the form.</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="footer-1-bottom-row">\
            <div class="footer-fine-print">\
                <div>© Foray</div>\
                <div> • Powered by \
                    <a href="https://webflow.com/" target="_blank" class="text-white">Webflow</a>\
                </div>\
            </div>\
            <div class="social-list">\
                <a href="https://twitter.com/" target="_blank" class="button-round social-button bg-white w-inline-block"><img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dbb9a34576e026eac5958f8_twitter.svg" alt="" class="button-round-icon"/></a>\
                <a href="https://www.instagram.com/" target="_blank" class="button-round social-button bg-white w-inline-block"><img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dbb9a33ce7be1125aafa2fb_instagram.svg" alt="" class="button-round-icon"/></a>\
                <a href="https://unsplash.com/" target="_blank" class="button-round social-button bg-white w-inline-block"><img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dbb9a33c0a7285d87d567cb_unsplash.svg" alt="" class="button-round-icon"/></a>\
                <a href="https://dribbble.com/" target="_blank" class="button-round social-button bg-white w-inline-block"><img src="https://assets.website-files.com/5db0fae6ca38713498151c5a/5dbb9a33576e0241d65958f7_dribbble.svg" alt="" class="button-round-icon"/></a>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp8.parent_selector = null;
        f.addComponentType(comp_comp8);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4, comp_comp5, comp_comp6, comp_comp7, comp_comp8]);

        f.addLibSection(section);
   });
});