import React, {ReactElement, useEffect, useState} from 'react';
import {ListRenderItemInfo, StyleSheet, View, ViewProps} from 'react-native';
import {
  Card,
  IndexPath,
  Layout,
  List,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {Header} from '../common';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {Purchase} from '../../actions';

const filters = ['Primeira compra', 'Última compra'];

export const UserPurchases: React.FC = () => {
  // FIXME: use redux
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const {userData} = useTypedSelector((state) => state.login);
  const {purchases, userPurchaseInfo} = useTypedSelector((state) => state.home);
  const {userGetPurchases, userGetPurchasesResume} = useActions();

  useEffect(() => {
    userGetPurchases(userData);
    userGetPurchasesResume(userData);
  }, [userData]);

  const renderCardHeader = (
    headerProps: ViewProps | undefined,
    info: {title: string},
  ): ReactElement => (
    <View
      {...headerProps}
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 8,
      }}>
      <Text style={resumeCard.title}>{info.title}</Text>
    </View>
  );

  const renderCardItemHeader = (
    headerProps: ViewProps | undefined,
    info: Purchase,
  ): ReactElement => (
    <View
      {...headerProps}
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <Text category="h4" style={{fontWeight: 'bold'}}>
        {info.retailer.name}
      </Text>
    </View>
  );

  const renderSelectItem = (title: string) => (
    <SelectItem key="title" title={title} />
  );

  const renderCardItem = (info: ListRenderItemInfo<Purchase>): ReactElement => {
    const {item: purchase} = info;
    return (
      <Card
        // style={card.item}
        header={(headerProps) => renderCardItemHeader(headerProps, purchase)}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
          Unidade: {purchase.retailer.address}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Data da compra: {purchase.purchase_date.toLocaleDateString()}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
          Valor da compra: {purchase.amount_paid}
        </Text>
      </Card>
    );
  };
  return (
    <>
      <Header title="Compras" />
      <View style={resume.container}>
        <Layout style={resume.content}>
          <Card
            status="success"
            header={(headerProps) =>
              renderCardHeader(headerProps, {title: 'Pago'})
            }>
            <Text category="primary" style={resumeCard.infoArea}>
              R$ {userPurchaseInfo.resume.amount_paid}
            </Text>
          </Card>

          <Card
            status="warning"
            header={(headerProps) =>
              renderCardHeader(headerProps, {title: 'A vencer'})
            }>
            <Text category="warning" style={resumeCard.infoArea}>
              R$ {userPurchaseInfo.resume.amount_payable}
            </Text>
          </Card>

          <Card
            status="danger"
            header={(headerProps) =>
              renderCardHeader(headerProps, {title: 'Vencidas'})
            }>
            <Text category="danger" style={resumeCard.infoArea}>
              R$ {userPurchaseInfo.resume.unpaid_amount}
            </Text>
          </Card>
        </Layout>
      </View>

      <Layout style={viewDsc.container}>
        <Text style={viewDsc.text}>
          Selecione uma compra abaixo e visualize suas parcelas...
        </Text>
      </Layout>
      <Layout style={{paddingTop: 30, paddingLeft: 15, paddingRight: 12}}>
        <Select
          label="Filtrar por:"
          size="medium"
          placeholder="Selecione um tipo de filtro"
          selectedIndex={selectedIndex}
          onSelect={(index: IndexPath | IndexPath[]) => {
            console.log(index);
            setSelectedIndex(index as IndexPath);
          }}
          value={filters[selectedIndex.row]}>
          {filters.map(renderSelectItem)}
        </Select>
      </Layout>
      <List
        style={list.container}
        contentContainerStyle={list.contentContainer}
        data={purchases}
        renderItem={renderCardItem}
      />
    </>
  );
};

const resume = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const resumeCard = StyleSheet.create({
  infoArea: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const viewDsc = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 20,
  },
});

const list = {
  container: {
    backgroundColor: 'white',
    // height: '100%',
    paddingTop: 20,
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
};
