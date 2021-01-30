import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, ViewPager, Card, Text, Icon} from '@ui-kitten/components';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

export const HomeUserStats: React.FC = () => {
  const {userChangeInfoCardStats} = useActions();
  const {userData} = useTypedSelector((state) => state.login);
  const {userInfoViewStatsIndex} = useTypedSelector((state) => state.home);

  useEffect(() => {
    userChangeInfoCardStats(2);
  }, []);

  return (
    <>
      <View style={page.container}></View>
      <ViewPager
        style={{flex: 8}}
        selectedIndex={userInfoViewStatsIndex}
        onOffsetChange={(offset) => console.log('offset', offset)}
        onSelect={(index: number) => {
          console.log('index', index);

          userChangeInfoCardStats(index);
        }}>
        <Layout level="2" style={styles.tab}>
          <Card>
            <Text>{userData?.name}</Text>
            <Text>{userData?.email}</Text>
            <Text>Teste</Text>
          </Card>
        </Layout>

        <Layout level="2" style={styles.tab}>
          <Card>
            <Text>{userData?.name}</Text>
            <Text>{userData?.email}</Text>
            <Text>FOOBAR</Text>
          </Card>
        </Layout>

        <Layout level="2" style={styles.tab}>
          <Card>
            <Text>{userData?.name}</Text>
            <Text>{userData?.email}</Text>
            <Text>{userData?.signup_date.toString()}</Text>
          </Card>
        </Layout>
      </ViewPager>
    </>
  );
};

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36,
  },
});

const flattenStyle = StyleSheet.flatten([page.text, typography.header]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  tab: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
