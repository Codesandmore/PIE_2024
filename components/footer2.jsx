import styles from "./Footer.module.css";

function Footer2() {
  return (
    <div>
      <div className={styles.footer}>
        <footer className={styles.frameParent}>
          <div className={styles.containerWrapper}>
            <div className={styles.container}>
              <div className={styles.headerContentParent}>
                <div className={styles.headerContent}>
                  <div className={styles.logo}>
                    <img
                      className={styles.image11Icon}
                      alt=""
                      src="/pielogo.png"
                    />
                  </div>
                  <div className={styles.msgbar}>
                    <div className={styles.msgbarChild} />
                    <input
                      className={styles.inputField}
                      placeholder="Enter your message"
                      type="text"
                    />
                    <div className={styles.sendButtonArea}>
                      <div className={styles.buttonIcon}>
                        <div className={styles.buttonIconChild} />
                        <img
                          className={styles.image12Icon}
                          alt=""
                          src="/image-12-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.navigationLinks}>
                  <div className={styles.plansPricingParent}>
                    <div
                      className={styles.plansPricing}
                    >{`Plans & Pricing`}</div>
                    <div className={styles.features}>Features</div>
                    <div className={styles.newsBlogs}>{`News & Blogs`}</div>
                    <div className={styles.careers}>Careers</div>
                  </div>
                  <div className={styles.aboutUsParent}>
                    <div className={styles.aboutUs}>About Us</div>
                    <div className={styles.documentation}>Documentation</div>
                    <div className={styles.papers}>Papers</div>
                    <div className={styles.pressConferences}>
                      Press Conferences
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.socialMediaBar}>
                <button className={styles.instagram}>
                  <img className={styles.igIcon} alt="" src="icon/inst.png" />
                </button>
                <button className={styles.facebook}>
                  <img className={styles.fbIcon} alt="" src="icon/fb.png" />
                </button>
                <button className={styles.linkedin}>
                  <img
                    className={styles.linkedinIcon}
                    alt=""
                    src="icon/Ldin.png"
                  />
                </button>
                <button className={styles.spotify}>
                  <img
                    className={styles.spotifyIcon}
                    alt=""
                    src="icon/sp.png"
                  />
                </button>
                <div className={styles.yt}>
                  <img
                    className={styles.ytIcon}
                    loading="lazy"
                    alt=""
                    src="icon/yt.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerLine} />
        </footer>
        <div className={styles.footerContent}>
          <div className={styles.container1}>
            <div className={styles.copyright2023}>
              Copyright © 2023 IEEE PIE KERALA SECTION
            </div>
            {/* <div className={styles.legalLinks}>
              <div className={styles.termsOfService}>Terms of Service</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.cookies}>Cookies</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
