Template.deployment.settings = function () {
    return {
        showFilter: true,
        fields: [
          {key:'First Name',
          label: 'First Name'},
          {key:'Last Name',
          label: 'Last Name'},
          {key:'Pos',
          label:'Pos'},
          {key:'End Team',
          label:'End Team'},
          {key: 'GP',
          label: 'GP'},
          {key: 'TOI',
          label: 'TOI'},
          { key: 'TOI%', label: 'TOI%' },
          { key: 'ZS', label: 'ZS' },
          { key: 'OZS%', label: 'OZS%' },
          { key: 'NZS%', label: 'NZS%' },
          { key: 'DZS%', label: 'DZS%' },
          { key: 'ZS%', label: 'ZS%' },
          { key: 'ZS%rel', label: 'ZS%rel '},
          { key: 'OZShr', label: 'OZShr' },
          { key: 'NZShr', label: 'NZShr' },
          { key: 'DZShr', label: 'DZShr' }
      ]
    };
};