/* @ngInject */
function hotkeyModal(pmModal, mailSettingsModel, CONSTANTS) {
    return pmModal({
        controllerAs: 'ctrl',
        templateUrl: require('../../../templates/modals/hotkey.tpl.html'),
        /* @ngInject */
        controller: function(params) {
            const { ViewLayout } = mailSettingsModel.get();

            this.isMac = navigator.userAgent.indexOf('Mac OS X') !== -1;

            if (ViewLayout === CONSTANTS.ROW_MODE) {
                this.mode = 'row';
            } else if (ViewLayout === CONSTANTS.COLUMN_MODE) {
                this.mode = 'column';
            }

            this.close = function() {
                params.close();
            };
        }
    });
}
export default hotkeyModal;
