// Template.stats.helpers({
//     data: function () {
        
//     }
// });

Template.stats.settings = function () {
    return {
        showFilter: true,
        fields: [{
                    key: 'First Name',  
                    label: 'First Name'
                }, {
                    key: 'Last Name',  
                    label: 'Last Name'
                }, {
                    key: 'End Team',
                    label: 'End Team'
                }, {
                    key: 'GP',
                    label: 'GP'
                }, {
                    key: 'G',
                    label: 'G'
                }, {
                    key: 'A',
                    label: 'A'
                }, {
                    key: 'Pos',
                    label: 'Pos'
                }, {
                    key: 'PTS',
                    label: 'PTS'
                }, {
                    key: 'Sh%',
                    label: 'Sh%'
                }
            ]
    };
};