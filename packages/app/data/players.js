const players = [
  {
    id: 'p1',
    name: 'LeBron James',
    team: 'Los Angeles Lakers',
    position: 'Forward',
    hight: "6'9",
    ppg: '29.1',
    imageUrl:
      'https://static01.nyt.com/images/2020/06/10/us/politics/10lebron-voters/10lebron-voters-mediumSquareAt3X.jpg',
    active: true,
    faceImageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    teamColor: '#582484',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/global/D/logo.svg',
  },
  {
    id: 'p2',
    name: 'Michael Jordan',
    team: 'Chicago Bulls ',
    position: 'Guard',
    hight: "6'6",
    ppg: '30.1',
    imageUrl:
      'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/05/1200/675/michael-jordan-2-Getty-Images.jpg?ve=1&tl=1',
    active: false,
    faceImageUrl:
      'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/893.png',
    teamColor: '#d01444',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612741/global/D/logo.svg',
  },
  {
    id: 'p3',
    name: 'Kobe Bryant',
    team: 'Los Angeles Lakers ',
    position: 'Forward-Guard',
    hight: "6'6",
    ppg: '25',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/1200px-Kobe_Bryant_2014.jpg',
    active: false,
    faceImageUrl:
      'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612747/2015/260x190/977.png',
    teamColor: '#582484',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/global/D/logo.svg',
  },
  {
    id: 'p4',
    name: 'Steph Curry',
    team: 'Golden State Warriors ',
    position: 'Point Guard',
    hight: "6'2",
    ppg: '25.8',
    imageUrl:
      'https://library.sportingnews.com/2022-01/stephen-curry-ftr_1brlc3k3jwvwr1fjrw3y1k16pj.jpeg',
    active: true,
    faceImageUrl:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
    teamColor: '#186cb4',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/global/D/logo.svg',
  },
  {
    id: 'p5',
    name: 'Yanis Adetokunbo',
    team: 'Milwaukee Bucks ',
    position: 'Forward',
    hight: "6'11",
    ppg: '29.4',
    imageUrl:
      'https://www.gannett-cdn.com/presto/2019/01/20/PMJS/abae1bc2-9945-46b5-9261-61633c668638-GAN_20190119_GGW_MB4_153_76340998.JPG?crop=3299,1856,x0,y105&width=3200&height=1801&format=pjpg&auto=webp',
    active: true,
    faceImageUrl:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
    teamColor: '#10441c',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/global/D/logo.svg',
  },
  {
    id: 'p6',
    name: 'Luka Doncic',
    team: 'Dallas Mavericks',
    position: 'Forward-Guard',
    hight: "6'7",
    ppg: '27.5',
    imageUrl:
      'https://www.insidesport.in/wp-content/uploads/2020/12/5dd6cacefd9db26af732e7a6.jpg',
    active: true,
    faceImageUrl:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
    teamColor: '#1054bc',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/global/D/logo.svg',
  },
  {
    id: 'p7',
    name: 'Kevin Durant',
    team: 'Brooklyn Nets',
    position: 'Forward',
    hight: "6'10",
    ppg: '29.3',
    imageUrl:
      'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F06%2Fkevin-durant-best-nba-player-in-the-word-title-debate-000.jpg?w=960&cbr=1&q=90&fit=max',
    active: true,
    faceImageUrl:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
    teamColor: '#080404',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612751/global/D/logo.svg',
  },
  {
    id: 'p8',
    name: 'Deni Avdija',
    team: 'Washington Wizards',
    position: 'Forward',
    hight: "6'9",
    ppg: '7.7',
    imageUrl:
      'https://www.jewishexponent.com/wp-content/uploads/2021/03/avdija.jpg',
    active: true,
    faceImageUrl:
      'https://cdn.nba.com/headshots/nba/latest/1040x760/1630166.png',
    teamColor: '#082c5c',
    teamLogo: 'https://cdn.nba.com/logos/nba/1610612764/global/D/logo.svg',
  },
];

export const getAllPlayers = () => {
  return [...players];
};
export const getPlayerById = id => {
  return players.find(player => {
    return player.id === id;
  });
};
