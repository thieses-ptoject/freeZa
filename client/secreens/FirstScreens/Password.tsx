import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles/password";

const Password = () => {
  return (
    <View style={styles.wrongPassword}>
      <Image
        style={styles.bubblesIcon}
        source={require("../../assets/password/bubbles.png")}
      />
      <View style={styles.dots}>
        <Image
          style={styles.ellispse01Icon}

          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon1}
          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon2}
          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon3}
          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon4}
          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon5}
          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon6}
          source={require("../../assets/password/ellispse-01.png")}
        />
        <Image
          style={styles.ellispse01Icon7}
          source={require("../../assets/password/ellispse-01.png")}
        />
      </View>
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.title1}>Hello, Romina!!</Text>
      <Text style={styles.title2}>Type your password</Text>
      <Image
        style={[styles.ellispseIcon, styles.iconLayout]}
        source={require("../../assets/password/ellispse.png")}
      />

      <View
        style={[styles.keyboardAlphabetic, styles.keyboardAlphabeticPosition]}
      >
        <View style={styles.background}>
          <View
            style={[styles.backgroundBackground, styles.backgroundPosition]}
          />
          <View style={styles.background1} />
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            source={require("../../assets/password/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            source={require("../../assets/password/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.rectangleShadowBox1} />
            <View style={styles.linksTo} />
            <Text style={[styles.label, styles.labelLayout]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <View style={[styles.spaceBackground, styles.backgroundPosition]} />
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.label1, styles.labelLayout]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.rectangleShadowBox1} />
            <Text style={[styles.label2, styles.labelLayout]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={styles.background}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.rectangleShadowBox1} />
              <Text style={[styles.label2, styles.labelLayout]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
    
              source={require("../../assets/password/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={styles.background}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.rectangleShadowBox} />
              <Text style={styles.symbol}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.timePosition]}
    
              source={require("../../assets/password/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol10, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol11, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol11, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol11, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
      <View style={[styles.ellipse, styles.ellipsePosition]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipsePosition]}
        source={require("../../assets/password/ellipse.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  keyboardAlphabeticPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    height: 16,
    top: "50%",
    position: "absolute",
  },
  backgroundPosition: {
    backgroundColor: Color.colorGray_300,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewPosition: {
    height: 42,
    marginTop: 32.5,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  labelLayout: {
    height: 21,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "50%",
    color: Color.colorBlack,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  shiftPosition: {
    width: 42,
    marginTop: -21.5,
    height: 42,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  mLayout: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  symbolTypo: {
    fontSize: FontSize.size_3xl_5,
    marginTop: -15,
    letterSpacing: -1,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    top: "50%",
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  nPosition: {
    marginLeft: 59.5,
    left: "50%",
  },
  bPosition: {
    marginLeft: 21.5,
    left: "50%",
  },
  vPosition: {
    marginLeft: -15.5,
    left: "50%",
  },
  cPosition: {
    marginLeft: -53.5,
    left: "50%",
  },
  xPosition: {
    marginLeft: -90.5,
    left: "50%",
  },
  zPosition: {
    marginLeft: -128.5,
    left: "50%",
  },
  lPosition: {
    marginTop: -75.5,
    width: 32,
    height: 42,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipsePosition: {
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  bubblesIcon: {
    top: -208,
    left: -196,
    width: 519,
    height: 573,
    position: "absolute",
  },
  ellispse01Icon: {
    width: 17,
    left: 0,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon1: {
    left: 29,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon2: {
    left: 58,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon3: {
    left: 87,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon4: {
    left: 116,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon5: {
    left: 145,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon6: {
    left: 174,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  ellispse01Icon7: {
    left: 203,
    width: 17,
    top: 0,
    height: 17,
    position: "absolute",
  },
  dots: {
    top: 390,
    left: 78,
    width: 220,
    height: 17,
    position: "absolute",
  },
  title: {
    top: 445,
    left: 112,
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.nunitoSans12ptLight,
    fontWeight: "300",
    position: "absolute",
  },
  title1: {
    top: 282,
    left: 88,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorGray_200,
    position: "absolute",
  },
  title2: {
    top: 348,
    left: 104,
    fontSize: 19,
    lineHeight: 35,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunitoSans12ptLight,
    fontWeight: "300",
    position: "absolute",
  },
  ellispseIcon: {
    top: 149,
    right: 135,
    bottom: 558,
    left: 135,
  },
  backgroundIcon: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  batteryIcon: {
    right: 15,
    width: 24,
    marginTop: -4.67,
    height: 11,
  },
  wifiIcon: {
    right: 44,
    width: 15,
    marginTop: -4.67,
    height: 11,
  },
  cellularConnectionIcon: {
    marginTop: -4.33,
    marginLeft: 106.17,
    left: "50%",
    width: 17,
  },
  backgroundIcon1: {
    bottom: 2,
    right: 0,
    left: 0,
    top: 0,
  },
  time: {
    marginTop: -7,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSans12ptSemiBold,
    left: "0%",
    height: 16,
    color: Color.colorBlack,
    textAlign: "center",
    width: "100%",
  },
  barsTimeBlack: {
    height: "40.91%",
    width: "14.4%",
    top: "29.55%",
    right: "80%",
    bottom: "29.55%",
    left: "5.6%",
    position: "absolute",
    overflow: "hidden",
  },
  barsstatusBarlightStatusB: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  backgroundBackground: {
    bottom: 0,
  },
  background1: {
    backgroundColor: Color.colorLightgray,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 9,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  dictationIcon: {
    height: 25,
    width: 15,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorDarkgray,
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  linksTo: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    marginTop: -10,
  },
  return: {
    width: 88,
    right: 0,
  },
  spaceBackground: {
    bottom: 8,
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label1: {
    marginTop: -10.31,
  },
  space: {
    marginLeft: -91.5,
    width: 182,
    left: "50%",
  },
  label2: {
    marginTop: -9,
  },
  view: {
    width: 87,
    left: 0,
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    right: 0,
  },
  symbol: {
    marginTop: -14,
    left: "49.33%",
    fontSize: FontSize.size_3xl,
    letterSpacing: -1,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    top: "50%",
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  shiftIcon: {
    marginTop: -8.8,
    marginLeft: -9.34,
    width: 19,
    left: "50%",
  },
  shift: {
    left: 0,
  },
  symbol1: {
    left: "20.31%",
  },
  m: {
    right: 55,
    marginTop: -21.5,
    width: 32,
    top: "50%",
  },
  symbol2: {
    left: "26.56%",
  },
  n: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  b: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  v: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  c: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  symbol6: {
    left: "29.69%",
  },
  x: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  z: {
    width: 32,
    height: 42,
    position: "absolute",
    overflow: "hidden",
    marginTop: -21.5,
    top: "50%",
  },
  symbol8: {
    left: "32.81%",
  },
  l: {
    right: 18,
  },
  k: {
    marginLeft: 96.5,
    left: "50%",
  },
  symbol10: {
    left: "39.06%",
  },
  j: {
    marginLeft: 59.5,
    left: "50%",
  },
  symbol11: {
    left: "23.44%",
  },
  h: {
    marginLeft: 21.5,
    left: "50%",
  },
  g: {
    marginLeft: -15.5,
    left: "50%",
  },
  f: {
    marginLeft: -53.5,
    left: "50%",
  },
  d: {
    marginLeft: -90.5,
    left: "50%",
  },
  s: {
    marginLeft: -128.5,
    left: "50%",
  },
  a: {
    left: 19,
  },
  p: {
    right: 0,
    top: 0,
  },
  o: {
    right: 37,
    top: 0,
  },
  symbol19: {
    left: "42.19%",
  },
  i: {
    marginLeft: 77.5,
    left: "50%",
    top: 0,
  },
  u: {
    marginLeft: 40.5,
    left: "50%",
    top: 0,
  },
  y: {
    marginLeft: 2.5,
    left: "50%",
    top: 0,
  },
  t: {
    marginLeft: -34.5,
    left: "50%",
    top: 0,
  },
  r: {
    marginLeft: -72.5,
    left: "50%",
    top: 0,
  },
  e: {
    marginLeft: -109.5,
    left: "50%",
    top: 0,
  },
  symbol25: {
    left: "14.06%",
  },
  w: {
    left: 37,
    top: 0,
  },
  q: {
    left: 0,
    top: 0,
  },
  keys: {
    top: 8,
    right: 3,
    bottom: 24,
    left: 3,
    position: "absolute",
    overflow: "hidden",
  },
  keyboardAlphabetic: {
    top: 521,
    height: 291,
  },
  ellipse: {
    marginTop: -85,
    left: 211,
    width: 40,
    height: 40,
  },
  ellipseIcon: {
    marginTop: -245,
    width: "19.73%",
    right: "40%",
    left: "40.27%",
    height: 81,
    maxWidth: "100%",
    top: "50%",
  },
  wrongPassword: {
    backgroundColor: "#fff",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Password;
