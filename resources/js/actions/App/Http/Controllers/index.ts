import BibleController from './BibleController'
import ReferralController from './ReferralController'
import BibleSearchController from './BibleSearchController'
import SermonController from './SermonController'
import DashboardController from './DashboardController'
import BibleInteractionController from './BibleInteractionController'
import LessonController from './LessonController'
import AffiliateDashboardController from './AffiliateDashboardController'
import AffiliateAdminController from './AffiliateAdminController'
import Settings from './Settings'

const Controllers = {
    BibleController: Object.assign(BibleController, BibleController),
    ReferralController: Object.assign(ReferralController, ReferralController),
    BibleSearchController: Object.assign(BibleSearchController, BibleSearchController),
    SermonController: Object.assign(SermonController, SermonController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    BibleInteractionController: Object.assign(BibleInteractionController, BibleInteractionController),
    LessonController: Object.assign(LessonController, LessonController),
    AffiliateDashboardController: Object.assign(AffiliateDashboardController, AffiliateDashboardController),
    AffiliateAdminController: Object.assign(AffiliateAdminController, AffiliateAdminController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers