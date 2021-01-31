import React, {ReactElement, useEffect} from 'react';
import {ListRenderItemInfo, StyleSheet, View, ViewProps} from 'react-native';
import {
  Button,
  Card,
  Layout,
  List,
  Radio,
  Text,
  ViewPager,
} from '@ui-kitten/components';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {UserAccountInfo, UserPurchaseResume} from '../../actions';
import {Header} from '../common';

type Info = {
  title: string;
  data: UserPurchaseResume | UserAccountInfo;
};

export const HomeUserStats: React.FC = () => {
  const {
    userChangeInfoCardStats,
    userGetAccountInfo,
    userGetGeneralUserAccountInfo,
  } = useActions();
  const {userData} = useTypedSelector((state) => state.login);
  const {
    userInfoViewStatsIndex,
    userAccountInfo,
    userGeneralAccountInfo,
  } = useTypedSelector((state) => state.home);

  useEffect(() => {
    userChangeInfoCardStats(0);
  }, []);

  useEffect(() => {
    userGetAccountInfo(userData);
    userGetGeneralUserAccountInfo(userData);
  }, [userData]);

  // FIXME: All List functions belongs to future ListComponent file
  const renderItemHeader = (
    headerProps: ViewProps | undefined,
    info: Info,
  ): ReactElement => (
    <View
      {...headerProps}
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      {/* <Icon name="bar-chart-outline" /> */}
      <Text category="h4" style={{fontWeight: 'bold'}}>
        {info.title}
      </Text>
    </View>
  );

  const renderItem = (info: ListRenderItemInfo<Info>): ReactElement => {
    const {title} = info.item;
    if (title === 'Limites') {
      const {total, available, used} = info.item.data as UserAccountInfo;
      return (
        <Card
          style={card.item}
          status={available > used ? 'success' : 'warning'}
          header={(headerProps) => renderItemHeader(headerProps, info.item)}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
            Limite total: R$ {total}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'blue',
              marginTop: 5,
            }}>
            Limite já utilizado: R$ {used}
          </Text>
          <Text
            status="primary"
            style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
            Limite disponível: R$ {available}
          </Text>
        </Card>
      );
    } else if (title === 'Compras') {
      const {resume} = info.item.data as UserPurchaseResume;
      return (
        <Card
          style={card.item}
          status={resume.unpaid_amount > 0 ? 'danger' : 'warning'}
          header={(headerProps) => renderItemHeader(headerProps, info.item)}>
          <Text
            status="primary"
            style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
            Pagas até o momento: R$ {resume.amount_paid}
          </Text>
          <Text
            status="warning"
            style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
            Compras a vencer: R$ {resume.amount_payable}
          </Text>
          <Text
            status="danger"
            style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
            Compras vencidas: R$ {resume.unpaid_amount}
          </Text>
        </Card>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Header title="" />
      {userAccountInfo ? ( //FIXME: Put it inside another file
        <ViewPager
          selectedIndex={userInfoViewStatsIndex}
          onOffsetChange={(offset) => console.log('offset', offset)}
          onSelect={(index: number) => {
            userChangeInfoCardStats(index);
          }}>
          <Layout style={limitsView.tab}>
            <Card appearance="filled">
              <View style={card.content}>
                <Text style={{margin: 5}} category="c1">
                  Limite
                </Text>
                <Text style={card.accountStatsText}>
                  Seu Limite Total é de:
                </Text>
                <Text style={card.accountStatsText} status="primary">
                  R$ {userAccountInfo.total}
                </Text>
                <Button>Verificar limites</Button>
              </View>
            </Card>
          </Layout>

          <Layout style={limitsView.tab}>
            <Card appearance="filled">
              <View style={card.content}>
                <Text style={{margin: 5}} category="c1">
                  Usado
                </Text>
                <Text style={card.accountStatsText}>
                  Seu Limite Usado é de:
                </Text>
                <Text style={card.accountStatsText} status="primary">
                  R$ {userAccountInfo.used}
                </Text>
              </View>
            </Card>
          </Layout>

          <Layout style={limitsView.tab}>
            <Card appearance="filled">
              <View style={card.content}>
                <Text style={{margin: 5}} category="c1">
                  Disponível
                </Text>
                <Text style={card.accountStatsText}>
                  Seu Limite Disponível é de:
                </Text>
                <Text style={card.accountStatsText} status="primary">
                  R$ {userAccountInfo.available}
                </Text>
              </View>
            </Card>
          </Layout>
        </ViewPager>
      ) : (
        <></>
      )}
      {/* FIXME: Move the component below own file */}
      <View style={indicator.container}>
        <Layout style={indicator.content}>
          <Radio
            checked={userInfoViewStatsIndex === 0 ? true : false}
            style={indicator.knob}
          />
          <Radio
            checked={userInfoViewStatsIndex === 1 ? true : false}
            style={indicator.knob}
          />
          <Radio
            checked={userInfoViewStatsIndex === 2 ? true : false}
            style={indicator.knob}
          />
        </Layout>
      </View>

      {/* FIXME: Move the component below own file */}
      <List
        style={list.container}
        contentContainerStyle={list.contentContainer}
        data={userGeneralAccountInfo}
        renderItem={renderItem}
      />
    </>
  );
};

const header = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
});

const card = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountStatsText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    marginVertical: 4,
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

const limitsView = StyleSheet.create({
  tab: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const indicator = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  knob: {
    margin: 10,
  },
});
