import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";

 
const DATA = [
  {
    title: "面接日程調整",
    data: [
      "株式会社◯◯◯◯　採用担当△△様\n\nお世話になっております。貴人求人に応募させて頂いた△△△△と申します。\n\n 面接日程のご連絡を頂き、誠にありがとうございます。僭越ながら面接の希望日程をお送りさせていただきます。\n\n第1希望　◯月◯日　◯：◯◯〜◯：◯◯ \n第2希望　◯月◯日　◯：◯◯〜◯：◯◯\n第3希望　◯月◯日　◯：◯◯〜◯：◯◯\n\n上記の日程でご調整頂けますと幸いです。お忙しいところ恐れ入りますが、何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号　123-4567-8901\nメール　　××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
  {
    title: "スケジュールの見通しが立っていない場合",
    data: [
      "株式会社◯◯◯◯　採用担当△△様\n\nお世話になっております。△△△△と申します。\n\n面接日程のご連絡を頂き、誠にありがとうございます。\n\n現在、スケジュールの見通しが立っておらず、\n\n希望の日程をすぐに提示できる状況にありません。\n\n◯月◯日にはスケジュールが確定しますので、確定次第、再度ご連絡致します。\n\n 取り急ぎお礼のみで失礼致します。\n\nお忙しいところ恐れ入りますが、何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号　123-4567-8901\nメール××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
  {
    title: "面接日程の決定通知",
    data: [
      "株式会社◯◯◯◯　採用担当△△様\n\nお世話になっております。貴社求人に応募致しました△△△△と申します。\n\n面接日程のご連絡を頂き、誠にありがとうございます。\nご指定いただきました日程で貴社にお伺い致します。\n\n◯月◯日（火）　◯：◯◯〜◯：◯◯\n株式会社◯◯◯◯　3F会議室\n面接のお時間を頂きまして、誠にありがたく思います。\n当日は何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号　123-4567-8901\nメール　　××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
  {
    title: "決定した日程を変更したい際",
    data: [
      "株式会社◯◯◯◯　採用担当△△様\n\nお世話になっております。◯月◯日◯時から面接のお時間を頂いております△△△△と申します。\nこちらの都合で大変恐縮ではございますが、家庭の事情により、上記の日程にお伺いすることが難しくなってしまいました。\n\n可能であれば、下記の日程での再調整をご検討いただけますでしょうか。\n\n△月△日　△：△△〜\n△月△日　△：△△〜\n△月△日　△：△△〜\nお忙しいところお手数をおかけし、誠に申し訳ございません。\n何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号　123-4567-8901\nメール　　××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
  {
    title: "日程を調整してもらったことへの感謝を伝える",
    data: [
      "株式会社◯◯◯◯　採用担当△△様\n\nお世話になっております。貴社求人に応募致しました△△△△と申します。\n\nこの度は、面接日程の調整をして頂き、誠にありがとうございます。\nそれでは、調整していただいた日程で貴社にお伺いさせて頂きます。\n\n◯月◯日◯時〜\n\nお手数をおかけしてしまい、申し訳ございません。\n当日は何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号　123-4567-8901\nメール　　××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
  {
    title: "連絡が来ない時の催促",
    data: [
      "採用担当△△様\n\nお世話になっております。貴社求人に応募致しました△△△△と申します。\n\n先日は面接をしていただける旨をお伝えいただき、ありがとうございます。\nご相談させていただいております面接の日程ですが、その後いかがでしょうか。\n\n念のために以前お送りしたメールを再度転送いたします。\n\n第1希望　◯月◯日　◯：◯◯〜◯：◯◯\n第2希望　◯月◯日　◯：◯◯〜◯：◯◯\n第3希望　◯月◯日　◯：◯◯〜◯：◯◯\n\n上記の日程でご調整頂けますと幸いです。\nお忙しいところ恐れ入りますが、何卒よろしくお願い申し上げます。\n\nお忙しいところ恐れ入りますが、ご確認の上返信いただけますと幸いです。\n何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号123-4567-8901\nメール　　××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
  {
    title: "いつでも良い場合",
    data: [
      "採用担当△△様\n\nお世話になっております。貴社求人に応募致しました△△△△と申します。\n\n面接日程の件、特に希望はございませんので△△様のご都合のよろしい日時にて調整いただければと存じます。\n\nお忙しいところ恐れ入りますが、ご確認の上返信いただけますと幸いです。\n何卒よろしくお願い申し上げます。\n\n－－－－－－－－－－－－－－－\n◯◯◯◯（氏名）\n〒100-□□□□\n○○県◯◯区◯◯12-3（都道府県から建物名、号室まで記載）\n電話番号123-4567-8901\nメール　　××××@××.com\n－－－－－－－－－－－－－－－",
    ],
  },
];

const Header = ()=>(
  <View>
  <Text>メール返信ダルイくん</Text>
  </View>
)
const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title} selectable>
        {title}
      </Text>
    </TouchableOpacity>
    <Button
      onPress={() =>
        Linking.openURL("mailto:support@example.com?body=body")
      }
      title="Gmail"
    />
  </View>
);

 


// const handleOpenEmailboxAsync = async () => {
//   if (Platform.OS === "ios") {
//     try {
//       await openInbox({
//         message: messageActionSheetiOS,
//         cancelLabel: "Cancel",
//       });
//     } catch (error) {
//       console.error(`OpenEmailbox > iOS Error > ${error}`);
//     }
//   }

//   if (Platform.OS === "android") {
//     const activityAction = "android.intent.action.MAIN";
//     const intentParams: IntentLauncher.IntentLauncherParams = {
//       category: "android.intent.category.APP_EMAIL",
//     };
//     IntentLauncher.startActivityAsync(activityAction, intentParams);
//   }
// };


class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header} selecttable>{title}</Text>
          )}
        />
       
        {/* <Button onPress={(handleOpenEmailboxAsync)} title="open email app"/> */}
        {/* <Button mailto="support@expo.io" title="Gmailを開く" /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#b0e0e6",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#f5fffa",
  },
  title: {
    fontSize: 14,
  },
});

export default App;
