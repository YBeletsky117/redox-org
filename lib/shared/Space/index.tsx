import React, { FC } from 'react';
import { View } from 'react-native';

interface Props {
  m?: number | string;
  mH?: number | string;
  mV?: number | string;
  ml?: number | string;
  mr?: number | string;
  mt?: number | string;
  mb?: number | string;
  p?: number | string;
  pH?: number | string;
  pV?: number | string;
  pl?: number | string;
  pr?: number | string;
  pt?: number | string;
  pb?: number | string;
  w?: number | string;
  h?: number | string;
  f?: number;
  direction?: string;
  align?: string;
  justify?: string;
  bgc?: string;
  radius?: number;
}

export const Space: FC<Props> = ({
  m, mH, mV, ml, mr, mt, mb,
  p, pH, pV, pl, pr, pt, pb,
  w, h,
  f,
  direction,
  align,
  justify,
  bgc,
  children,
  radius,
}) => {
  const styles: {[key: string]: number | string} = {};

  m && (styles.margin = m);
  mH && (styles.marginHorizontal = mH);
  mV && (styles.marginVertical = mV);
  ml && (styles.marginLeft = ml);
  mr && (styles.marginRight = mr);
  mt && (styles.marginTop = mt);
  mb && (styles.marginBottom = mb);
  p && (styles.padding = p);
  pH && (styles.paddingHorizontal = pH);
  pV && (styles.paddingVertical = pV);
  pl && (styles.paddingLeft = pl);
  pr && (styles.paddingRight = pr);
  pt && (styles.paddingTop = pt);
  pb && (styles.paddingBottom = pb);
  w && (styles.width = w);
  h && (styles.height = h);
  f && (styles.flex = f);
  direction && (styles.flexDirection = direction);
  align && (styles.alignItems = align);
  justify && (styles.justifyContent = justify);
  bgc && (styles.backgroundColor = bgc);
  radius && (styles.borderRadius = radius);


  return (
    <View style={styles}>
      {children}
    </View>
  );
};
