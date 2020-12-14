const settings = [
    {
        words: [
            'ドーナツ',
            'ドーナッツ',
            'ﾄﾞｰﾅﾂ',
            'ﾄﾞｰﾅｯﾂ',
            'doughnut',
            'donut',
            'Doughnut',
            'Donut',
            'クルーラー',
            'ｸﾙｰﾗｰ',
            'ポンデリング',
            'ﾎﾟﾝﾃﾞﾘﾝｸﾞ',
            'どーなつ',
            'どーなっつ',
            'オールドファッション',
            'ｵｰﾙﾄﾞﾌｧｯｼｮﾝ',
        ],
    },
];

export const makeRegexp = (): RegExp => {
    return new RegExp(settings.map(({ words }) => words.join('|')).join('|'));
};
