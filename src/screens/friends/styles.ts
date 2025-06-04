import { UiColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColors.white.soft,
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchBar: {
    backgroundColor: UiColors.neutral.light,
    elevation: 0,
    borderRadius: 12,
    borderWidth:1,
    borderColor:UiColors.neutral.medium
  },
  searchInput: {
    color: UiColors.font.primary,
  },
  listContainer: {
    flexGrow: 1,
    paddingTop:10,
    paddingBottom: 80, // Space for FAB
  },
  friendItem: {
    backgroundColor: UiColors.white.main,
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 10,
    elevation: 0,
  },
  friendContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    backgroundColor: UiColors.primary.main,
  },
  avatarLabel: {
    color: UiColors.white.main,
    fontSize: 18,
    fontWeight: '600',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: UiColors.tertiary.main,
    borderWidth: 2,
    borderColor: UiColors.white.main,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: UiColors.font.primary,
    marginBottom: 2,
  },
  lastMessage: {
    fontSize: 14,
    color: UiColors.font.secondary,
  },
  friendMeta: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    color: UiColors.font.secondary,
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: UiColors.primary.main,
    color: UiColors.white.main,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyIcon: {
    backgroundColor: UiColors.neutral.light,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: UiColors.font.primary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: UiColors.font.secondary,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: UiColors.primary.main,
  },
});
export default styles;