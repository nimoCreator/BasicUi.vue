/**
 * routes:
 * "/" <- home
 * "/sitemap" <- sitemap
 * "/components/BasicIcon" <- site about BasicIcon component, how to use it, code examples, posibilities, all all features and all parameteres/props
 * "/components/xyz" <- site about xyz component, how to use it, code examples, posibilities, all all features and all parameteres/props
 * "/author"
 * 
 *  route template:
 * {
 * path
 * name
 * component
 * meta {
 *  bool: can be favourited
 *  bool: track in recently visited
 *  bool: show in sitemap
 *  bool: show in navbar
 * int: counter how manyu times visited (if can be done, would need to store that in pinia in LS)
 * }
 * }
 * before/after route change do the visits pinia store
 */
