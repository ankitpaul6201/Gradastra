var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/7GuSIJ2Jm6VU0TIDHoiR/SlideShow.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resize } from "@motionone/dom";
import { ControlType, RenderTarget, addPropertyControls, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, animate, frame, mix, motion, useInView, useMotionValue, useTransform, wrap } from "framer-motion";
import { Children, cloneElement, forwardRef, memo, startTransition, useCallback as useCallback2, useEffect, useLayoutEffect as useLayoutEffect2, useRef as useRef2, useState } from "react";

// http-url:https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/7GuSIJ2Jm6VU0TIDHoiR/use-effect-event
import { useCallback, useLayoutEffect, useRef } from "react";
function useEffectEvent(fn) {
  const ref = useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });
  return useCallback((...args) => ref.current(...args), []);
}

// http-url:https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/7GuSIJ2Jm6VU0TIDHoiR/SlideShow.js
var slideshowClassName = "framer-slideshow";
var slideshowAxisXClassName = "framer-slideshow-axis-x";
var slideshowAxisYClassName = "framer-slideshow-axis-y";
var slideshowDirectionMultiplierVariable = "--framer-dir-multiplier";
var slideshowDirectionMultiplier = `var(${slideshowDirectionMultiplierVariable}, -1)`;
function SlideshowWithoutCSS(props) {
  const { slots = [], startFrom, direction, effectsOptions, autoPlayControl, dragControl, alignment, gap, padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft, itemAmount: visibleItemsCount, fadeOptions, intervalControl, transitionControl, arrowOptions, borderRadius, progressOptions, style } = props;
  const { effectsOpacity, effectsScale, effectsRotate, effectsPerspective, effectsHover, playOffscreen } = effectsOptions;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha } = fadeOptions;
  const { showMouseControls, arrowSize, arrowRadius, arrowFill, leftArrow, rightArrow, arrowShouldSpace = true, arrowShouldFadeIn = false, arrowPosition, arrowPadding, arrowGap, arrowPaddingTop, arrowPaddingRight, arrowPaddingBottom, arrowPaddingLeft } = arrowOptions;
  const { showProgressDots, dotSize, dotsInset, dotsRadius, dotsPadding, dotsGap, dotsFill, dotsBackground, dotsActiveOpacity, dotsOpacity, dotsBlur } = progressOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const filteredSlots = slots.filter(Boolean);
  const totalItemsCount = Children.count(filteredSlots);
  const hasChildren = totalItemsCount > 0;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs("section", { style: placeholderStyles, children: [/* @__PURE__ */ _jsx("div", { style: emojiStyles, children: "\u2B50\uFE0F" }), /* @__PURE__ */ _jsx("p", { style: titleStyles, children: "Connect to Content" }), /* @__PURE__ */ _jsx("p", { style: subtitleStyles, children: "Add layers or components to make infinite auto-playing slideshows." })] });
  }
  const scheduleMeasureIfEverythingReady = useCallback2(() => {
    if (parentRef.current && firstChildRef.current && lastChildRef.current) {
      scheduleMeasure();
    }
  }, []);
  const parentRef = useRef2(null);
  const parentRefFn = useCallback2((node) => {
    parentRef.current = node;
    scheduleMeasureIfEverythingReady();
  }, [scheduleMeasureIfEverythingReady]);
  const firstChildRef = useRef2(null);
  const firstChildRefFn = useCallback2((node) => {
    firstChildRef.current = node;
    scheduleMeasureIfEverythingReady();
  }, [scheduleMeasureIfEverythingReady]);
  const lastChildRef = useRef2(null);
  const lastChildRefFn = useCallback2((node) => {
    lastChildRef.current = node;
    scheduleMeasureIfEverythingReady();
  }, [scheduleMeasureIfEverythingReady]);
  const [size, setSize] = useState({ parent: null, children: null, item: null, itemWidth: null, itemHeight: null, viewportLength: null });
  const isHorizontal = direction === "left" || direction === "right";
  const writingDirection = useWritingDirection();
  const rtlDirectionModifier = isHorizontal && writingDirection === "rtl" ? -1 : 1;
  const [isHovering, setIsHovering] = useState(false);
  const [shouldPlayOnHover, setShouldPlayOnHover] = useState(autoPlayControl);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isInitialized = size?.item !== null && size?.parent !== null && writingDirection !== null;
  const extraCopyCount = Math.ceil((startFrom + visibleItemsCount) / totalItemsCount);
  let dupedChildren = [];
  let duplicateBy = extraCopyCount * 4;
  if (isCanvas || !isInitialized) {
    duplicateBy = extraCopyCount;
  }
  const [currentItem, setCurrentItem] = useState(startFrom + totalItemsCount);
  useEffect(() => {
    if (!size.item || !writingDirection)
      return;
    const computedNewPosition = -1 * currentItem * ((size.item ?? 0) + gap) * (writingDirection === "rtl" ? -1 : 1);
    if (xOrY.get() !== computedNewPosition) {
      animate(xOrY, computedNewPosition, transitionControl);
    }
  }, [currentItem, size.item, gap, writingDirection]);
  const measure = () => {
    if (!parentRef.current || !firstChildRef.current || !lastChildRef.current)
      return;
    const writingDirection2 = getWritingDirection();
    const isRTL = isHorizontal && writingDirection2 === "rtl";
    const firstChild = isRTL ? lastChildRef.current : firstChildRef.current;
    const lastChild = isRTL ? firstChildRef.current : lastChildRef.current;
    const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
    const start = firstChild ? isHorizontal ? firstChild.offsetLeft : firstChild.offsetTop : 0;
    const end = lastChild ? isHorizontal ? lastChild.offsetLeft + lastChild.offsetWidth : lastChild.offsetTop + lastChild.offsetHeight : 0;
    const childrenLength = end - start + gap;
    const itemSize = firstChild ? isHorizontal ? firstChild.offsetWidth : firstChild.offsetHeight : 0;
    const itemWidth = firstChild ? firstChild.offsetWidth : 0;
    const itemHeight = firstChild ? firstChild.offsetHeight : 0;
    const viewportLength = isHorizontal ? Math.max(document.documentElement.clientWidth || 0, __dai_window.innerWidth || 0, parentRef.current.offsetWidth) : Math.max(document.documentElement.clientHeight || 0, __dai_window.innerHeight || 0, parentRef.current.offsetHeight);
    setSize({ parent: parentLength, children: childrenLength, item: itemSize, itemWidth, itemHeight, viewportLength });
  };
  const scheduleMeasure = useEffectEvent(async () => {
    frame.read(measure, false, true);
  });
  useLayoutEffect2(() => {
    scheduleMeasure();
  }, [slots.length, visibleItemsCount, gap, direction, padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft]);
  useEffect(() => {
    const node = parentRef.current;
    if (!node)
      return;
    return resize(node, ({ contentSize }) => {
      if (contentSize.width || contentSize.height) {
        scheduleMeasure();
      }
    });
  }, []);
  const childrenSize = isCanvas ? 0 : size?.children;
  const [isDragging, setIsDragging] = useState(false);
  const visibilityRef = useRef2(null);
  const isInView = useInView(visibilityRef);
  const isVisible = usePageInView() && isInView;
  const xOrY = useMotionValue(childrenSize);
  const wrappedXOrY = !isCanvas ? useTransform(xOrY, (value) => {
    const resolvedChildrenSize = childrenSize ?? 0;
    const resolvedValue = value ?? 0;
    const wrapped = wrap(-resolvedChildrenSize * rtlDirectionModifier, -resolvedChildrenSize * rtlDirectionModifier * 2, resolvedValue);
    return Number.isNaN(wrapped) ? 0 : wrapped;
  }) : 0;
  const wrappedIndex = wrap(0, totalItemsCount, currentItem);
  const setDelta = (delta) => {
    startTransition(() => setCurrentItem((item) => item + delta));
  };
  const setPage = (index) => {
    const currentItemWrapped = wrap(0, totalItemsCount, currentItem);
    const goto = index - currentItemWrapped;
    startTransition(() => setCurrentItem((item) => item + goto));
  };
  const autoplayStep = (direction === "right" || direction === "bottom" ? -1 : 1) * rtlDirectionModifier;
  const canAutoplay = autoPlayControl && shouldPlayOnHover && (playOffscreen || isVisible) && !isCanvas && totalItemsCount > 1 && !isDragging && isInitialized;
  useEffect(() => {
    if (!canAutoplay)
      return;
    const timeoutId = setTimeout(() => {
      setDelta(autoplayStep);
    }, intervalControl * 1e3);
    return () => clearTimeout(timeoutId);
  }, [canAutoplay, autoplayStep, intervalControl, currentItem]);
  const handleDragStart = () => {
    startTransition(() => setIsDragging(true));
  };
  const handleDragEnd = (event, { offset, velocity }) => {
    startTransition(() => setIsDragging(false));
    const offsetXorY = isHorizontal ? offset.x : offset.y;
    const velocityThreshold = 200;
    const velocityXorY = isHorizontal ? velocity.x : velocity.y;
    const isHalfOfNext = offsetXorY < -size.item / 2;
    const isHalfOfPrev = offsetXorY > size.item / 2;
    const normalizedOffset = Math.abs(offsetXorY);
    const itemDelta = Math.round(normalizedOffset / size.item);
    const itemDeltaFromOne = itemDelta === 0 ? 1 : itemDelta;
    if (velocityXorY > velocityThreshold) {
      setDelta(-itemDeltaFromOne * rtlDirectionModifier);
    } else if (velocityXorY < -velocityThreshold) {
      setDelta(itemDeltaFromOne * rtlDirectionModifier);
    } else {
      if (isHalfOfNext) {
        setDelta(itemDelta * rtlDirectionModifier);
      }
      if (isHalfOfPrev) {
        setDelta(-itemDelta * rtlDirectionModifier);
      }
    }
  };
  const staticStartFrom = Math.max(0, Math.min(startFrom ?? 0, Math.max(0, totalItemsCount - 1)));
  const staticPercentOffset = staticStartFrom * 100 / visibleItemsCount;
  const staticPixelOffset = staticStartFrom * gap / visibleItemsCount;
  let childCounter = 0;
  const columnOrRowValue = `calc(${100 / visibleItemsCount}% - ${gap}px + ${gap / visibleItemsCount}px)`;
  for (let index = 0; index < duplicateBy; index++) {
    dupedChildren = dupedChildren.concat(Children.map(filteredSlots, (child, childIndex) => {
      let ref;
      if (index === 0) {
        if (childIndex === 0) {
          ref = firstChildRefFn;
        } else if (childIndex === filteredSlots.length - 1) {
          ref = lastChildRefFn;
        }
      }
      return /* @__PURE__ */ _jsx(Slide, { ref, slideKey: index + childIndex + "lg", index, width: isHorizontal ? visibleItemsCount > 1 ? columnOrRowValue : "100%" : "100%", height: !isHorizontal ? visibleItemsCount > 1 ? columnOrRowValue : "100%" : "100%", size, child, numChildren: filteredSlots?.length, wrappedXOrY, childCounter: childCounter++, gap, isCanvas, isInitialized, isHorizontal, effectsOpacity, effectsScale, effectsRotate, writingDirection, rtlDirectionModifier, children: index + childIndex }, index + childIndex + "lg");
    }));
  }
  const fadeDirection = isHorizontal ? "to right" : "to bottom";
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask = `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  const dots = [];
  const dotsBlurStyle = {};
  if (showProgressDots) {
    for (let i = 0; i < filteredSlots?.length; i++) {
      dots.push(/* @__PURE__ */ _jsx(Dot, { dotStyle: { ...dotStyle, width: dotSize, height: dotSize, backgroundColor: dotsFill }, buttonStyle: baseButtonStyles, selectedOpacity: dotsActiveOpacity, opacity: dotsOpacity, disabled: !isCanvas && !isInitialized, onClick: () => setPage(i), wrappedIndex: isCanvas || !isInitialized ? staticStartFrom : wrappedIndex, total: totalItemsCount, index: i, gap: dotsGap, padding: dotsPadding, isHorizontal }, i));
    }
    if (dotsBlur > 0) {
      dotsBlurStyle.backdropFilter = dotsBlurStyle.WebkitBackdropFilter = `blur(${dotsBlur}px)`;
    }
  }
  const dragProps = isInitialized && dragControl ? { drag: isHorizontal ? "x" : "y", onDragStart: handleDragStart, onDragEnd: handleDragEnd, dragDirectionLock: true, values: { x: writingDirection === "rtl" ? -xOrY : xOrY, y: xOrY }, dragMomentum: false } : {};
  const arrowHasTop = arrowPosition === "top-left" || arrowPosition === "top-mid" || arrowPosition === "top-right";
  const arrowHasBottom = arrowPosition === "bottom-left" || arrowPosition === "bottom-mid" || arrowPosition === "bottom-right";
  const arrowHasLeft = arrowPosition === "top-left" || arrowPosition === "bottom-left";
  const arrowHasRight = arrowPosition === "top-right" || arrowPosition === "bottom-right";
  const arrowHasMid = arrowPosition === "top-mid" || arrowPosition === "bottom-mid" || arrowPosition === "auto";
  const leftArrowSrc = leftArrow || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left";
  const rightArrowSrc = rightArrow || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right";
  return /* @__PURE__ */ _jsxs("section", { className: `${slideshowClassName} ${isHorizontal ? slideshowAxisXClassName : slideshowAxisYClassName}`, style: { ...containerStyle, padding: paddingValue, WebkitMaskImage: fadeContent ? fadeMask : void 0, maskImage: fadeContent ? fadeMask : void 0, userSelect: "none" }, onMouseEnter: () => {
    setIsHovering(true);
    if (!effectsHover)
      setShouldPlayOnHover(false);
  }, onMouseLeave: () => {
    setIsHovering(false);
    if (!effectsHover)
      setShouldPlayOnHover(true);
  }, onMouseDown: (event) => {
    event.preventDefault();
    startTransition(() => setIsMouseDown(true));
  }, onMouseUp: () => startTransition(() => setIsMouseDown(false)), ref: visibilityRef, children: [/* @__PURE__ */ _jsx("div", { style: { width: "100%", height: "100%", margin: 0, padding: "inherit", position: "absolute", inset: 0, overflow: overflow ? "visible" : "hidden", borderRadius, userSelect: "none", perspective: isCanvas ? "none" : effectsPerspective }, children: /* @__PURE__ */ _jsx(motion.ul, { ref: parentRefFn, ...dragProps, style: { ...containerStyle, gap, placeItems: alignment, ...isCanvas || !isInitialized ? { transform: isHorizontal ? `translateX(calc(${slideshowDirectionMultiplier} * (${staticPercentOffset}% + ${staticPixelOffset}px)))` : `translateY(calc(${slideshowDirectionMultiplier} * (${staticPercentOffset}% + ${staticPixelOffset}px)))` } : { x: isHorizontal ? wrappedXOrY : 0, y: !isHorizontal ? wrappedXOrY : 0 }, flexDirection: isHorizontal ? "row" : "column", transformStyle: effectsRotate !== 0 && !isCanvas ? "preserve-3d" : void 0, cursor: (isCanvas || isInitialized) && dragControl ? isMouseDown ? "grabbing" : "grab" : "auto", userSelect: "none", ...style }, children: dupedChildren }) }), /* @__PURE__ */ _jsxs("fieldset", { style: { ...controlsStyles }, "aria-label": "Slideshow pagination controls", className: "framer--slideshow-controls", children: [/* @__PURE__ */ _jsxs(motion.div, { style: { position: "absolute", display: "flex", flexDirection: isHorizontal ? "row" : "column", justifyContent: arrowShouldSpace ? "space-between" : "center", gap: arrowShouldSpace ? "unset" : arrowGap, opacity: arrowShouldFadeIn || !isCanvas && !isInitialized ? 0 : 1, alignItems: "center", inset: arrowPadding, top: arrowShouldSpace ? arrowPadding : arrowHasTop ? arrowPaddingTop : "unset", left: arrowShouldSpace ? arrowPadding : arrowHasLeft ? arrowPaddingLeft : arrowHasMid ? 0 : "unset", right: arrowShouldSpace ? arrowPadding : arrowHasRight ? arrowPaddingRight : arrowHasMid ? 0 : "unset", bottom: arrowShouldSpace ? arrowPadding : arrowHasBottom ? arrowPaddingBottom : "unset" }, animate: isCanvas || isInitialized ? arrowShouldFadeIn ? { opacity: isHovering ? 1 : 0 } : { opacity: 1 } : { opacity: 0 }, transition: transitionControl, children: [/* @__PURE__ */ _jsx(motion.button, { type: "button", style: { ...baseButtonStyles, backgroundColor: arrowFill, width: arrowSize, height: arrowSize, borderRadius: arrowRadius, rotate: !isHorizontal ? 90 : 0, display: showMouseControls ? "block" : "none", pointerEvents: isCanvas || isInitialized ? "auto" : "none", cursor: isCanvas || isInitialized ? "pointer" : "default" }, disabled: !(isCanvas || isInitialized), onClick: () => setDelta(-1), "aria-label": "Previous", whileTap: { scale: 0.9 }, transition: { duration: 0.15 }, children: /* @__PURE__ */ _jsx("img", { decoding: "async", width: arrowSize, height: arrowSize, src: isHorizontal && writingDirection === "rtl" ? rightArrowSrc : leftArrowSrc, alt: "Back Arrow" }) }), /* @__PURE__ */ _jsx(motion.button, { type: "button", style: { ...baseButtonStyles, backgroundColor: arrowFill, width: arrowSize, height: arrowSize, borderRadius: arrowRadius, rotate: !isHorizontal ? 90 : 0, display: showMouseControls ? "block" : "none", pointerEvents: isCanvas || isInitialized ? "auto" : "none", cursor: isCanvas || isInitialized ? "pointer" : "default" }, disabled: !(isCanvas || isInitialized), onClick: () => setDelta(1), "aria-label": "Next", whileTap: { scale: 0.9 }, transition: { duration: 0.15 }, children: /* @__PURE__ */ _jsx("img", { decoding: "async", width: arrowSize, height: arrowSize, src: isHorizontal && writingDirection === "rtl" ? leftArrowSrc : rightArrowSrc, alt: "Next Arrow" }) })] }), dots.length > 1 ? /* @__PURE__ */ _jsx(motion.div, { style: {
    ...dotsContainerStyle,
    left: isHorizontal ? "50%" : dotsInset,
    top: !isHorizontal ? "50%" : "unset",
    transform: isHorizontal ? "translateX(-50%)" : "translateY(-50%)",
    flexDirection: isHorizontal ? "row" : "column",
    bottom: isHorizontal ? dotsInset : "unset",
    borderRadius: dotsRadius,
    backgroundColor: dotsBackground,
    userSelect: "none",
    ...dotsBlurStyle,
    // Hard-code opacity to 1 on canvas. In SSR, it will be animated from 0 to 1 in `animate`
    opacity: isCanvas ? 1 : 0,
    pointerEvents: isCanvas || isInitialized ? "auto" : "none"
  }, animate: { opacity: isInitialized ? 1 : 0 }, transition: { duration: 0.35, ease: "easeOut" }, children: dots }) : null] })] });
}
var Slideshow = withCSS(SlideshowWithoutCSS, [`.${slideshowAxisXClassName} { ${slideshowDirectionMultiplierVariable}: -1; }`, `html[dir="rtl"] .${slideshowAxisXClassName} { ${slideshowDirectionMultiplierVariable}: 1; }`, `.${slideshowAxisYClassName} { ${slideshowDirectionMultiplierVariable}: -1; }`], "framer-slideshow-component");
var SlideShow_default = Slideshow;
Slideshow.defaultProps = { direction: "left", dragControl: false, startFrom: 0, itemAmount: 1, infinity: true, gap: 10, padding: 10, autoPlayControl: true, effectsOptions: { effectsOpacity: 1, effectsScale: 1, effectsRotate: 0, effectsPerspective: 1200, effectsHover: true, playOffscreen: false }, transitionControl: { type: "spring", stiffness: 200, damping: 40 }, fadeOptions: { fadeContent: false, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 }, arrowOptions: { showMouseControls: true, arrowShouldFadeIn: false, arrowShouldSpace: true, arrowFill: "rgba(0,0,0,0.2)", arrowSize: 40 }, progressOptions: { showProgressDots: true } };
addPropertyControls(Slideshow, { slots: { type: ControlType.Array, title: "Content", control: { type: ControlType.ComponentInstance } }, direction: { type: ControlType.Enum, title: "Direction", options: ["left", "right", "top", "bottom"], optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"], optionTitles: ["Left", "Right", "Top", "Bottom"], displaySegmentedControl: true, defaultValue: Slideshow.defaultProps.direction }, autoPlayControl: { type: ControlType.Boolean, title: "Auto Play", defaultValue: true }, intervalControl: { type: ControlType.Number, title: "Interval", defaultValue: 1.5, min: 0.5, max: 10, step: 0.1, displayStepper: true, unit: "s", hidden: (props) => !props.autoPlayControl }, dragControl: { type: ControlType.Boolean, title: "Draggable", defaultValue: false }, startFrom: { type: ControlType.Number, title: "Current", min: 0, max: 10, displayStepper: true, defaultValue: Slideshow.defaultProps.startFrom }, effectsOptions: { type: ControlType.Object, title: "Effects", controls: { effectsOpacity: { type: ControlType.Number, title: "Opacity", defaultValue: Slideshow.defaultProps.effectsOptions.effectsOpacity, min: 0, max: 1, step: 0.01, displayStepper: true }, effectsScale: { type: ControlType.Number, title: "Scale", defaultValue: Slideshow.defaultProps.effectsOptions.effectsScale, min: 0, max: 1, step: 0.01, displayStepper: true }, effectsPerspective: { type: ControlType.Number, title: "Perspective", defaultValue: Slideshow.defaultProps.effectsOptions.effectsPerspective, min: 200, max: 2e3, step: 1 }, effectsRotate: { type: ControlType.Number, title: "Rotate", defaultValue: Slideshow.defaultProps.effectsOptions.effectsRotate, min: -180, max: 180, step: 1 }, effectsHover: { type: ControlType.Boolean, title: "On Hover", enabledTitle: "Play", disabledTitle: "Pause", defaultValue: Slideshow.defaultProps.effectsOptions.effectsHover }, playOffscreen: { type: ControlType.Boolean, title: "Offscreen", enabledTitle: "Play", disabledTitle: "Pause", defaultValue: Slideshow.defaultProps.effectsOptions.playOffscreen } } }, alignment: { type: ControlType.Enum, title: "Align", options: ["flex-start", "center", "flex-end"], optionIcons: { direction: { right: ["align-top", "align-middle", "align-bottom"], left: ["align-top", "align-middle", "align-bottom"], top: ["align-left", "align-center", "align-right"], bottom: ["align-left", "align-center", "align-right"] } }, defaultValue: "center", displaySegmentedControl: true }, itemAmount: { type: ControlType.Number, title: "Items", min: 1, max: 10, displayStepper: true, defaultValue: Slideshow.defaultProps.itemAmount }, gap: { type: ControlType.Number, title: "Gap", min: 0 }, padding: { title: "Padding", type: ControlType.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], defaultValue: 0, valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0 }, borderRadius: { type: ControlType.Number, title: "Radius", min: 0, max: 500, displayStepper: true, defaultValue: 0 }, transitionControl: { type: ControlType.Transition, defaultValue: Slideshow.defaultProps.transitionControl, title: "Transition" }, fadeOptions: { type: ControlType.Object, title: "Clipping", controls: { fadeContent: { type: ControlType.Boolean, title: "Fade", defaultValue: false }, overflow: { type: ControlType.Boolean, title: "Overflow", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false, hidden(props) {
  return props.fadeContent === true;
} }, fadeWidth: { type: ControlType.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeInset: { type: ControlType.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeAlpha: { type: ControlType.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: 0.05, hidden(props) {
  return props.fadeContent === false;
} } } }, arrowOptions: { type: ControlType.Object, title: "Arrows", controls: { showMouseControls: { type: ControlType.Boolean, title: "Show", defaultValue: Slideshow.defaultProps.arrowOptions.showMouseControls }, arrowFill: { type: ControlType.Color, title: "Fill", hidden: (props) => !props.showMouseControls, defaultValue: Slideshow.defaultProps.arrowOptions.arrowFill }, leftArrow: { type: ControlType.Image, title: "Previous", hidden: (props) => !props.showMouseControls }, rightArrow: { type: ControlType.Image, title: "Next", hidden: (props) => !props.showMouseControls }, arrowSize: { type: ControlType.Number, title: "Size", min: 0, max: 200, displayStepper: true, defaultValue: Slideshow.defaultProps.arrowOptions.arrowSize, hidden: (props) => !props.showMouseControls }, arrowRadius: { type: ControlType.Number, title: "Radius", min: 0, max: 500, defaultValue: 40, hidden: (props) => !props.showMouseControls }, arrowShouldFadeIn: { type: ControlType.Boolean, title: "Fade In", defaultValue: false, hidden: (props) => !props.showMouseControls }, arrowShouldSpace: { type: ControlType.Boolean, title: "Distance", enabledTitle: "Space", disabledTitle: "Group", defaultValue: Slideshow.defaultProps.arrowOptions.arrowShouldSpace, hidden: (props) => !props.showMouseControls }, arrowPosition: { type: ControlType.Enum, title: "Position", options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"], optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"], hidden: (props) => !props.showMouseControls || props.arrowShouldSpace }, arrowPadding: { type: ControlType.Number, title: "Inset", min: -100, max: 100, defaultValue: 20, displayStepper: true, hidden: (props) => !props.showMouseControls || !props.arrowShouldSpace }, arrowPaddingTop: { type: ControlType.Number, title: "Top", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "bottom-mid" || props.arrowPosition === "bottom-left" || props.arrowPosition === "bottom-right" }, arrowPaddingBottom: { type: ControlType.Number, title: "Bottom", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "top-mid" || props.arrowPosition === "top-left" || props.arrowPosition === "top-right" }, arrowPaddingRight: { type: ControlType.Number, title: "Right", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "top-left" || props.arrowPosition === "top-mid" || props.arrowPosition === "bottom-left" || props.arrowPosition === "bottom-mid" }, arrowPaddingLeft: { type: ControlType.Number, title: "Left", min: -500, max: 500, defaultValue: 0, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === "auto" || props.arrowPosition === "top-right" || props.arrowPosition === "top-mid" || props.arrowPosition === "bottom-right" || props.arrowPosition === "bottom-mid" }, arrowGap: { type: ControlType.Number, title: "Gap", min: 0, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showMouseControls || props.arrowShouldSpace } } }, progressOptions: { type: ControlType.Object, title: "Dots", controls: { showProgressDots: { type: ControlType.Boolean, title: "Show", defaultValue: false }, dotSize: { type: ControlType.Number, title: "Size", min: 1, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsInset: { type: ControlType.Number, title: "Inset", min: -100, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsGap: { type: ControlType.Number, title: "Gap", min: 0, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsPadding: { type: ControlType.Number, title: "Padding", min: 0, max: 100, defaultValue: 10, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsFill: { type: ControlType.Color, title: "Fill", defaultValue: "#fff", hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsBackground: { type: ControlType.Color, title: "Backdrop", defaultValue: "rgba(0,0,0,0.2)", hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsRadius: { type: ControlType.Number, title: "Radius", min: 0, max: 200, defaultValue: 50, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsOpacity: { type: ControlType.Number, title: "Opacity", min: 0, max: 1, defaultValue: 0.5, step: 0.1, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsActiveOpacity: { type: ControlType.Number, title: "Current", min: 0, max: 1, defaultValue: 1, step: 0.1, displayStepper: true, hidden: (props) => !props.showProgressDots || props.showScrollbar }, dotsBlur: { type: ControlType.Number, title: "Blur", min: 0, max: 50, defaultValue: 0, step: 1, hidden: (props) => !props.showProgressDots || props.showScrollbar } } } });
var containerStyle = { display: "flex", flexDirection: "row", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: 0, padding: 0, listStyleType: "none", textIndent: "none" };
var placeholderStyles = { display: "flex", width: "100%", height: "100%", placeContent: "center", placeItems: "center", flexDirection: "column", color: "#96F", background: "rgba(136, 85, 255, 0.1)", fontSize: 11, overflow: "hidden", padding: "20px 20px 30px 20px" };
var emojiStyles = { fontSize: 32, marginBottom: 10 };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: "center" };
var baseButtonStyles = { border: "none", display: "flex", placeContent: "center", placeItems: "center", overflow: "hidden", background: "transparent", cursor: "pointer", margin: 0, padding: 0 };
var controlsStyles = { display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", pointerEvents: "none", userSelect: "none", top: 0, left: 0, right: 0, bottom: 0, border: 0, padding: 0, margin: 0 };
var clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var Slide = /* @__PURE__ */ memo(/* @__PURE__ */ forwardRef(function Component(props, ref) {
  const {
    slideKey,
    width,
    height,
    child,
    size,
    gap,
    wrappedXOrY,
    numChildren,
    childCounter,
    isCanvas,
    isInitialized,
    effects,
    effectsOpacity,
    effectsScale,
    effectsRotate,
    isHorizontal,
    isLast,
    index,
    /** "ltr" or "rtl" */
    writingDirection,
    /** -1 in RTL, 1 in LTR */
    rtlDirectionModifier
  } = props;
  const fallbackRef = useRef2();
  const itemSize = size?.item ?? 0;
  const parentSize = size?.parent ?? 0;
  const childOffset = (itemSize + gap) * childCounter;
  const scrollRange = (
    // @ivan: this was picked experimentally when fixing semi-working-but-broken RTL
    // implementation in the existing Carousel code. Don’t ask me why these specific values, I’m
    // finding it hard to fully reason about RTL in carousel :/
    (isHorizontal && writingDirection === "rtl" ? [itemSize - gap, 0, -parentSize + itemSize - gap, -parentSize - gap] : [-itemSize, 0, parentSize - itemSize + gap, parentSize]).map((val) => val - childOffset * rtlDirectionModifier)
  );
  const rotateY = !isCanvas && useTransform(
    wrappedXOrY,
    scrollRange,
    // Why flip the rotateY effect when RTL is enabled?
    //
    // Unlike other effects, rotation is vertically symmetrical. Say the user sets a 60 degree rotation.
    // The carousel will look like this:
    //   ) □ ▣ ▤ (
    // where
    // - □ ▣ ▤ are the three slides visible within the carousel,
    // - ) is an out-of-view slide to the left of the viewport,
    // - and ( is an out-of-view slide to the right of the viewport.
    // With 60° rotation, both out-of-view slides look “turned towards” the viewport,
    // which matters for the animation when the slides switch.
    //
    // If a user sets RTL, all items in the carousel will flip around. The carousel, by default, will now look like this:
    //   ( ▤ ▣ □ )
    // Notice how all slides reversed. The slide that was to the left of the viewport: ) – is now to the right of it!
    // And is now turned away from the viewport! So if we don’t flip the rotateY effect, the animation will look off.
    isHorizontal && writingDirection === "rtl" ? [effectsRotate, 0, 0, -effectsRotate] : [-effectsRotate, 0, 0, effectsRotate]
  );
  const rotateX = !isCanvas && useTransform(wrappedXOrY, scrollRange, [effectsRotate, 0, 0, -effectsRotate]);
  const opacity = !isCanvas && useTransform(wrappedXOrY, scrollRange, [effectsOpacity, 1, 1, effectsOpacity]);
  const scale = !isCanvas && useTransform(wrappedXOrY, scrollRange, [effectsScale, 1, 1, effectsScale]);
  const originXorY = !isCanvas && useTransform(
    wrappedXOrY,
    scrollRange,
    // Just like above, because in RTL, the items are flipped vertically, RTL needs a separate treatment
    isHorizontal && writingDirection === "rtl" ? [0, 0, 1, 1] : [1, 1, 0, 0]
  );
  const isVisible = !isCanvas && useTransform(wrappedXOrY, (latest) => {
    const min = Math.min(scrollRange[1], scrollRange[2]);
    const max = Math.max(scrollRange[1], scrollRange[2]);
    return latest >= min && latest <= max;
  });
  useEffect(() => {
    if (!isVisible || !isInitialized)
      return;
    function manageVisibility(visible) {
      const node = ref?.current ?? fallbackRef.current;
      if (!node)
        return;
      if (visible) {
        node.querySelectorAll("button,a").forEach((el) => {
          const orig = el.dataset.origTabIndex;
          if (orig)
            el.tabIndex = orig;
          else
            el.removeAttribute("tabIndex");
        });
      } else {
        node.querySelectorAll("button,a").forEach((el) => {
          const orig = el.getAttribute("tabIndex");
          if (orig)
            el.dataset.origTabIndex = orig;
          el.tabIndex = -1;
        });
      }
      node.setAttribute("aria-hidden", !visible);
    }
    manageVisibility(isVisible);
    return isVisible.on("change", (visible) => {
      manageVisibility(visible);
    });
  }, [isInitialized]);
  const visibility = isCanvas ? "visible" : useTransform(wrappedXOrY, [scrollRange[0] - size.viewportLength * rtlDirectionModifier, mix(scrollRange[1], scrollRange[2], 0.5), scrollRange[3] + size.viewportLength * rtlDirectionModifier], ["hidden", "visible", "hidden"]);
  const key = slideKey + "child";
  return /* @__PURE__ */ _jsx(LayoutGroup, { inherit: "id", id: key, children: /* @__PURE__ */ _jsx("li", { style: { display: "contents" }, children: /* @__PURE__ */ cloneElement(child, { ref: ref ?? fallbackRef, key, style: { ...child.props?.style, flexShrink: 0, userSelect: "none", width, height, ...isInitialized ? { opacity, scale, originX: isHorizontal ? originXorY : 0.5, originY: !isHorizontal ? originXorY : 0.5, rotateY: isHorizontal ? rotateY : 0, rotateX: !isHorizontal ? rotateX : 0, visibility } : {} }, layoutId: child.props.layoutId ? child.props.layoutId + "-original-" + index : void 0 }) }) });
}));
var Dot = /* @__PURE__ */ memo(function Dot2({ selectedOpacity, opacity, total, index, wrappedIndex, dotStyle: dotStyle2, buttonStyle, gap, padding, isHorizontal, ...props }) {
  const isSelected = wrappedIndex === index;
  const inlinePadding = gap / 2;
  const top = !isHorizontal && index !== 0 ? inlinePadding : padding;
  const bottom = !isHorizontal && index !== total - 1 ? inlinePadding : padding;
  const inlineStart = isHorizontal ? index === 0 ? padding : inlinePadding : padding;
  const inlineEnd = isHorizontal ? index === total - 1 ? padding : inlinePadding : padding;
  return /* @__PURE__ */ _jsx("button", { "aria-label": `Scroll to page ${index + 1}`, type: "button", ...props, style: { ...buttonStyle, paddingTop: top, paddingBottom: bottom, paddingInlineStart: inlineStart, paddingInlineEnd: inlineEnd }, children: /* @__PURE__ */ _jsx(motion.div, { style: { ...dotStyle2 }, initial: false, animate: { opacity: isSelected ? selectedOpacity : opacity }, transition: { duration: 0.3 } }) });
});
var dotsContainerStyle = { display: "flex", placeContent: "center", placeItems: "center", overflow: "hidden", position: "absolute", pointerEvents: "auto" };
var dotStyle = { borderRadius: "50%", background: "white", cursor: "pointer", border: "none", placeContent: "center", placeItems: "center", padding: 0 };
function getWritingDirection() {
  return __dai_window?.document?.documentElement?.dir === "rtl" ? "rtl" : "ltr";
}
function useWritingDirection() {
  const [writingDirection, setWritingDirection] = useState(null);
  useEffect(() => {
    setWritingDirection(getWritingDirection());
    return onWritingDirectionChange(() => {
      setWritingDirection(getWritingDirection());
    });
  }, []);
  return writingDirection;
}
var observer = null;
var callbacks = [];
function onWritingDirectionChange(callback) {
  callbacks.push(callback);
  if (!observer) {
    observer = new MutationObserver(() => callbacks.forEach((callback2) => callback2()));
    observer.observe(document.documentElement, { attributeFilter: ["dir"] });
  }
  return () => {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      observer?.disconnect();
      observer = null;
    }
  };
}
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Slideshow", "slots": [], "annotations": { "framerIntrinsicWidth": "400", "framerSupportedLayoutHeight": "fixed", "framerDisableUnlink": "*", "framerContractVersion": "1", "framerIntrinsicHeight": "200", "framerSupportedLayoutWidth": "fixed" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  SlideShow_default as default
};
