import React, {ReactElement, useEffect, useState} from 'react';
import {ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {
  Avatar,
  Button,
  IndexPath,
  Layout,
  List,
  ListItem,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {Header} from '../common';
import {Partners, Retailer} from '../../actions';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {ScrollView} from 'react-native-gesture-handler';

const categories = ['Acessórios', 'Telefonia', 'Supermercado', 'Alimentos'];

export const PartnersComponent: React.FC = () => {
  // FIXME: use redux
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const {partners} = useTypedSelector((state) => state.app);
  const {appGetPartners} = useActions();

  useEffect(() => {
    appGetPartners();
  }, []);

  const renderSelectItem = (title: string) => (
    <SelectItem key="title" title={title} />
  );

  const renderPartners = (partners: Partners, title: string) => {
    if (title === 'Acessórios') {
      const data: Retailer[] = partners.data.acessories;
      return data.map((partner) => renderPartnerItem(partner));
    } else if (title === 'Telefonia') {
      const data: Retailer[] = partners.data.telephony;
      return data.map((partner) => renderPartnerItem(partner));
    } else if (title === 'Supermercado') {
      const data: Retailer[] = partners.data.supermarket;
      return data.map((partner) => renderPartnerItem(partner));
    } else {
      const data: Retailer[] = partners.data.food;
      return data.map((partner) => renderPartnerItem(partner));
    }
  };

  const renderPartnerItem = (info: Retailer): ReactElement => {
    let element;

    element = (
      <View style={{alignItems: 'center', paddingRight: 20}}>
        <Avatar
          source={require('../config/assets/images/logo.png')}
          size="medium"
        />
        <Text category="s2">{info.name}</Text>
        <Button appearance="outline" size="tiny">
          Saiba mais
        </Button>
      </View>
    );

    return element;
  };

  return (
    <>
      <Header title="Parceiros" />
      <Layout style={description.container}>
        <Text style={description.text}>
          Pesquise por categoria para encontrar nossos parceiros e ver o
          endereço de onde aceitam pagamentos com a UME
        </Text>
      </Layout>
      <Layout
        style={{
          paddingTop: 30,
          paddingLeft: 15,
          paddingRight: 12,
          paddingBottom: 20,
        }}>
        <Select
          size="medium"
          label="Pesquise por categoria"
          placeholder="Pesquise por categoria"
          selectedIndex={selectedIndex}
          value={categories[selectedIndex.row]}
          onSelect={(index: IndexPath | IndexPath[]) => {
            console.log(index);
            setSelectedIndex(index as IndexPath);
          }}>
          {categories.map(renderSelectItem)}
        </Select>
      </Layout>
      {partners && (
        <ScrollView>
          <Layout style={list.container}>
            {categories.map((title) => (
              <>
                <Text key={title} style={list.titleText}>
                  {title}
                </Text>
                <View style={listItem.container}>
                  {renderPartners(partners, title)}
                </View>
              </>
            ))}
          </Layout>
        </ScrollView>
      )}
    </>
  );
};

const description = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: '800',
  },
});

const list = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  titleText: {
    paddingTop: 20,
    paddingLeft: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const listItem = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
