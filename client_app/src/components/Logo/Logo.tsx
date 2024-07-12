import React from 'react';
import { Image } from 'react-native';
import logoImage from '../../../assets/logo.png';

import { styles } from './LogoStyle';

export function Logo() {
  return (
    <>
        <Image source={logoImage} style={styles.tinyLogo}/>
    </>
  );
}