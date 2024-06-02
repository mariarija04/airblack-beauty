import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';
import { SafeAreaView } from "react-native";
const Mobile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.mobileContent}>
      <View style={[styles.image, styles.imageLayout]}>
        <View style={[styles.divframer145h7r4, styles.divframer145h7rPosition]}>
          <View style={[styles.divframer1w3xset, styles.divframerLayout1]}>
            <View style={styles.div}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../../assets/images/intro3.png")}
              />
            </View>
          </View>
          
          <View style={[styles.divframer1ycl6m, styles.divframerLayout1]}>
            <View style={styles.div}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../../assets/images/intro2.png")}
              />
            </View>
          </View>
          <View style={[styles.divframer1dnhb97, styles.divframerLayout1]}>
            <View style={styles.div}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../../assets/images/intro4.png")}
              />
            </View>
          </View>
          
         
          <View style={[styles.divframer1m45co2, styles.divframerLayout1]}>
            <View style={styles.div}>
              <Image
                style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                contentFit="cover"
                source={require("../../assets/images/intro1.png")}
              />
            </View>
          </View>
          
        </View>
        <View style={styles.airblackBeautyClubLogoParent}>
          <Image
            style={styles.airblackBeautyClubLogo}
            contentFit="cover"
            source={require("../../assets/images/logo.png")}
          />
          <Text style={[styles.presents, styles.presentsText]}>Presents</Text>
        </View>
      </View>
      <View style={styles.heroSection}>
        <View style={styles.heroText}>
          <Text style={[styles.title, styles.titleTypo]}>
            Professional Online Makeup Course
          </Text>
          <View style={styles.divframer1htwsli}>
            <View style={styles.divframer171cvlqParent}>
              <Image
                style={styles.divframer171cvlqIcon}
                contentFit="cover"
                source={require("../../assets/images/a.png")}
              />
              <View style={styles.divframerYhfsxu}>
                <View style={styles.p}>
                  <Text style={styles.certificationProgramme}>
                    Certification Programme
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.divframer2kuydl}>
              <Image
                style={styles.divframer1jff7sfIcon}
                contentFit="cover"
                source={require("../../assets/images/star.png")}
              />
              <View style={styles.divframer1j9x5ww}>
                <View style={[styles.p1, styles.p1SpaceBlock]}>
                  <Text style={[styles.rated4855, styles.rated4855Layout]}>
                    Rated 4.85/5
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.points}>
            <View style={styles.viewLayout}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../assets/images/tick.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>
                India’s No.1 Online Makeup Course
              </Text>
            </View>
            <View style={[styles.view1, styles.viewLayout]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../assets/images/tick.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>
                Learn by LIVE Do-it-Together Classes
              </Text>
            </View>
            <View style={[styles.view1, styles.viewLayout]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../assets/images/tick.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>
                Unlimited Practise Session to master skills
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.fillTheFormBelowToEnquireWrapper}>
            <Text style={[styles.fillTheForm, styles.submitTypo]}>
              Fill the form below to enquire
            </Text>
          </View>
          <View style={[styles.form, styles.imagePosition]}>
            <View style={styles.frameGroup}>
              <View style={styles.heroText}>
                <Text style={styles.enterYourName}>*Enter your name</Text>
                <View style={[styles.input, styles.inputSpaceBlock]}>
                  <Text style={[styles.egAneeshaMehra, styles.text3Typo]}>
                    Eg. Aneesha Mehra
                  </Text>
                </View>
              </View>
              <View style={styles.enterYourWhatsappNumberParent}>
                <Text style={styles.enterYourName}>
                  *Enter your WhatsApp Number
                </Text>
                <View style={[styles.inputParent, styles.inputSpaceBlock]}>
                  <View style={[styles.input1, styles.inputBorder]}>
                    <Text style={[styles.text3, styles.text3Typo]}>+91</Text>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../../assets/images/downarrow.png")}
                    />
                  </View>
                  <View style={[styles.input2, styles.inputBorder1]}>
                    <View style={styles.divplaceholder}>
                      <Text style={styles.eg0000000000}>Eg. 0000000000</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.enterYourWhatsappNumberParent}>
                <Text style={styles.enterYourName}>
                  *Select your profession
                </Text>
                <View style={[styles.input3, styles.inputBorder]}>
                  <Text style={[styles.chooseTheMost, styles.text3Typo]}>
                    Choose the most relevant option
                  </Text>
                  <Image
                    style={styles.svgIcon}
                    contentFit="cover"
                    source={require("../../assets/images/downarrow.png")}
                  />
                </View>
              </View>
              <View style={styles.enterYourWhatsappNumberParent}>
                <Text style={styles.enterYourName}>*Select your goal</Text>
                <View style={[styles.input3, styles.inputBorder]}>
                  <Text style={[styles.chooseTheMost, styles.text3Typo]}>
                    Choose the most relevant option
                  </Text>
                  <Image
                    style={styles.svgIcon}
                    contentFit="cover"
                    source={require("../../assets/images/downarrow.png")}
                  />
                </View>
              </View>
              <View style={styles.enterYourWhatsappNumberParent}>
                <Text style={styles.enterYourName}>*Select your city</Text>
                <View style={[styles.input3, styles.inputBorder]}>
                  <Text style={[styles.chooseTheMost, styles.text3Typo]}>
                    Choose the most relevant option
                  </Text>
                  <Image
                    style={styles.svgIcon}
                    contentFit="cover"
                    source={require("../../assets/images/downarrow.png")}
                  />
                </View>
              </View>
            </View>
            <LinearGradient
              style={[styles.divframerZlvey9, styles.divframerSpaceBlock]}
              locations={[0, 1]}
              colors={["#f56563", "#e54988"]}
            >
              <View>
                <View style={[styles.p2, styles.p1SpaceBlock]}>
                  <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={[styles.view3, styles.viewSpaceBlock]}>
        <View style={[styles.image1, styles.image1Position]}>
          <View style={[styles.divframer145h7r41, styles.image1Position]}>
            <View style={[styles.divframer1w3xset1, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/1.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerBblki71, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/2.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1ycl6m1, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/3.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1dnhb971, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/4.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerEavpp81, styles.divframerPosition]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/5.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerW2t5391, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/6.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerSpp2p81, styles.divframerPosition]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/7.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1l1064p1, styles.divframerPosition]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/8.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1m45co21, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/9.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer11lc4h61, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/10.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1fv8yp71, styles.divframerPosition]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/11.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1wr33m21, styles.divframerLayout]}>
              <View style={styles.div12}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/12.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
          <Image
            style={styles.vectorIconLayout}
            contentFit="cover"
            source={require("../../assets/images/left.png")}
          />
          <Text
            style={[styles.whyShouldYou, styles.whyShouldYouTypo]}
          >{`Why Should You 
Join Airblack?`}</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../../assets/images/right.png")}
          />
        </View>

        <View style={[styles.frameContainer, styles.frameContainerPosition]}>
          <View style={styles.frameLayout}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../../assets/images/zoom.png")}
            />
            <Text style={styles.doItTogetherLiveOn}>
              Do-it-together, live on zoom
            </Text>
          </View>
          <View style={[styles.frameParent1, styles.frameLayout]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../../assets/images/rating.png")}
            />
            <Text style={styles.doItTogetherLiveOn}>4.8 /5 Rated Classes</Text>
          </View>
          <View style={[styles.frameParent1, styles.frameLayout]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../../assets/images/members.png")}
            />
            <Text style={styles.doItTogetherLiveOn}>35000+ Members</Text>
          </View>
        </View>
        <LinearGradient
          style={[styles.divframerZlvey91, styles.instagramParentPosition]}
          locations={[0, 1]}
          colors={["#f56563", "#e54988"]}
        >
          <View>
            <View style={[styles.p2, styles.p1SpaceBlock]}>
              <Text style={[styles.submit, styles.submitTypo]}>Apply Now</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={[styles.view4, styles.viewSpaceBlock]}>
        <View style={styles.vectorGroup}>
          <Image
            style={styles.vectorIconLayout}
            contentFit="cover"
            source={require("../../assets/images/left.png")}
          />
          <Text
            style={[styles.getCertifiedFrom, styles.whyShouldYouTypo]}
          >{`Get Certified From 
India’s Biggest 
Beauty Platform`}</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../../assets/images/right.png")}
          />
        </View>
        <Image
          style={styles.image676Icon}
          contentFit="cover"
          source={require("../../assets/images/certificates.png")}
        />
      </View>      
      <View style={[styles.footer, styles.formFlexBox]}>
        <View style={[styles.image2, styles.imagePosition]}>
          <View
            style={[styles.divframer145h7r4, styles.divframer145h7rPosition]}
          >
            <View style={[styles.divframer1w3xset, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/1.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerBblki7, styles.divframerPosition2]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/2.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1ycl6m, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/3.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1dnhb97, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/4.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerEavpp8, styles.divframerPosition1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/5.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerW2t539, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/6.png")}
                />
              </View>
            </View>
            <View style={[styles.divframerSpp2p8, styles.divframerPosition1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/7.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1l1064p, styles.divframerPosition1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/8.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1m45co2, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/9.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer11lc4h6, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/10.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1fv8yp7, styles.divframerPosition1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/11.png")}
                />
              </View>
            </View>
            <View style={[styles.divframer1wr33m2, styles.divframerLayout1]}>
              <View style={styles.div}>
                <Image
                  style={styles.zmxqwkfbejrqapbt6wdbyw9c77apnIcon}
                  contentFit="cover"
                  source={require("../../assets/images/12.png")}
                />
              </View>
            </View>
          </View>
        </View>
          <View style={styles.p4}>
            <Text style={[styles.joinOurGrowingContainer, styles.titleTypo]}>
              <Text style={styles.joinOurGrowing}>{`Join our growing \ncommunity of \n35,000`}</Text>
              <Text style={styles.joinOurGrowing}>+</Text>
              <Text style={styles.joinOurGrowing}> alumni</Text>
            </Text>
          </View>
          <LinearGradient
            style={[styles.divframerZlvey92, styles.frameContainerPosition]}
            locations={[0, 1]}
            colors={["#f56563", "#e54988"]}
          >
            <View>
              <View style={[styles.p2, styles.p1SpaceBlock]}>
                <Text style={[styles.submit, styles.submitTypo]}>Apply Now</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={[styles.instagramParent, styles.instagramParentPosition]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/images/Instagram.png")}
            />
            <Image
              style={styles.facebookIcon}
              contentFit="cover"
              source={require("../../assets/images/facebook.png")}
            />
            <Image
              style={[styles.linkedinIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/images/linkedin.png")}
            />
            <Image
              style={styles.facebookIcon}
              contentFit="cover"
              source={require("../../assets/images/twitter.png")}
            />
          </View>
        </View>
  </ScrollView>
  </SafeAreaView>
  );
};


export default Mobile;