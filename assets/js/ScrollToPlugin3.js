/*!
 * ScrollToPlugin 3.5.2
 * https://greensock.com
 */

!(function(t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], e)
		: e(((t = t || self).window = t.window || {}));
})(this, function(e) {
	'use strict';
	function k() {
		return 'undefined' != typeof window;
	}
	function l() {
		return i || (k() && (i = window.gsap) && i.registerPlugin && i);
	}
	function m(t) {
		return 'string' == typeof t;
	}
	function n(t) {
		return 'function' == typeof t;
	}
	function o(t, e) {
		var o = 'x' === e ? 'Width' : 'Height',
			n = 'scroll' + o,
			r = 'client' + o;
		return t === x || t === u || t === c
			? Math.max(u[n], c[n]) - (x['inner' + o] || u[r] || c[r])
			: t[n] - t['offset' + o];
	}
	function p(t, e) {
		var o = 'scroll' + ('x' === e ? 'Left' : 'Top');
		return (
			t === x &&
				(null != t.pageXOffset
					? (o = 'page' + e.toUpperCase() + 'Offset')
					: (t = null != u[o] ? u : c)),
			function() {
				return t[o];
			}
		);
	}
	function r(t, e) {
		if (!(t = a(t)[0]) || !t.getBoundingClientRect)
			return (
				console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
			);
		var o = t.getBoundingClientRect(),
			n = !e || e === x || e === c,
			r = n
				? {
						top:
							u.clientTop - (x.pageYOffset || u.scrollTop || c.scrollTop || 0),
						left:
							u.clientLeft -
							(x.pageXOffset || u.scrollLeft || c.scrollLeft || 0)
				  }
				: e.getBoundingClientRect(),
			i = { x: o.left - r.left, y: o.top - r.top };
		return !n && e && ((i.x += p(e, 'x')()), (i.y += p(e, 'y')())), i;
	}
	function s(t, e, n, i, l) {
		return isNaN(t) || 'object' == typeof t
			? m(t) && '=' === t.charAt(1)
				? parseFloat(t.substr(2)) * ('-' === t.charAt(0) ? -1 : 1) + i - l
				: 'max' === t
				? o(e, n) - l
				: Math.min(o(e, n), r(t, e)[n] - l)
			: parseFloat(t) - l;
	}
	function t() {
		(i = l()),
			k() &&
				i &&
				document.body &&
				((x = window),
				(c = document.body),
				(u = document.documentElement),
				(a = i.utils.toArray),
				i.config({ autoKillThreshold: 7 }),
				(g = i.config()),
				(f = 1));
	}
	var i,
		f,
		x,
		u,
		c,
		a,
		g,
		d = {
			version: '3.5.2',
			name: 'scrollTo',
			rawVars: 1,
			register: function register(e) {
				(i = e), t();
			},
			init: function init(e, o, r, i, l) {
				f || t();
				var u = this;
				(u.isWin = e === x),
					(u.target = e),
					(u.tween = r),
					(o = (function _clean(t, e, o, r) {
						if ((n(t) && (t = t(e, o, r)), 'object' != typeof t))
							return m(t) && 'max' !== t && '=' !== t.charAt(1)
								? { x: t, y: t }
								: { y: t };
						if (t.nodeType) return { y: t, x: t };
						var i,
							l = {};
						for (i in t)
							'onAutoKill' !== i && (l[i] = n(t[i]) ? t[i](e, o, r) : t[i]);
						return l;
					})(o, i, e, l)),
					(u.vars = o),
					(u.autoKill = !!o.autoKill),
					(u.getX = p(e, 'x')),
					(u.getY = p(e, 'y')),
					(u.x = u.xPrev = u.getX()),
					(u.y = u.yPrev = u.getY()),
					null != o.x
						? (u.add(
								u,
								'x',
								u.x,
								s(o.x, e, 'x', u.x, o.offsetX || 0),
								i,
								l,
								Math.round
						  ),
						  u._props.push('scrollTo_x'))
						: (u.skipX = 1),
					null != o.y
						? (u.add(
								u,
								'y',
								u.y,
								s(o.y, e, 'y', u.y, o.offsetY || 0),
								i,
								l,
								Math.round
						  ),
						  u._props.push('scrollTo_y'))
						: (u.skipY = 1);
			},
			render: function render(t, e) {
				for (
					var n,
						r,
						i,
						l,
						s,
						u = e._pt,
						f = e.target,
						p = e.tween,
						c = e.autoKill,
						a = e.xPrev,
						d = e.yPrev,
						y = e.isWin;
					u;

				)
					u.r(t, u.d), (u = u._next);
				(n = y || !e.skipX ? e.getX() : a),
					(i = (r = y || !e.skipY ? e.getY() : d) - d),
					(l = n - a),
					(s = g.autoKillThreshold),
					e.x < 0 && (e.x = 0),
					e.y < 0 && (e.y = 0),
					c &&
						(!e.skipX && (s < l || l < -s) && n < o(f, 'x') && (e.skipX = 1),
						!e.skipY && (s < i || i < -s) && r < o(f, 'y') && (e.skipY = 1),
						e.skipX &&
							e.skipY &&
							(p.kill(),
							e.vars.onAutoKill &&
								e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))),
					y
						? x.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y)
						: (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)),
					(e.xPrev = e.x),
					(e.yPrev = e.y);
			},
			kill: function kill(t) {
				var e = 'scrollTo' === t;
				(!e && 'scrollTo_x' !== t) || (this.skipX = 1),
					(!e && 'scrollTo_y' !== t) || (this.skipY = 1);
			}
		};
	(d.max = o),
		(d.getOffset = r),
		(d.buildGetter = p),
		l() && i.registerPlugin(d),
		(e.ScrollToPlugin = d),
		(e.default = d);
	if (typeof window === 'undefined' || window !== e) {
		Object.defineProperty(e, '__esModule', { value: !0 });
	} else {
		delete e.default;
	}
});
