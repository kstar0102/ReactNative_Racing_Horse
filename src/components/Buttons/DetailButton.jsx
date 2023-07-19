import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
// Redux
import { connect, useDispatch } from "react-redux";
import { upbringingAction } from "../../store/actions/Pasture/upbringingAction";
import { upbringingFoodAction } from "../../store/actions/Pasture/upbringingFoodAction";
import { JockeyGrazingAction } from "../../store/actions/jockey/JockeyGrazingAction";
import { JockeyFoodAction } from "../../store/actions/jockey/JockeyFoodAction";
// container
import colors from "../../containers/colors";
import ModalButton from "./ModalButton";
import Tooltip from "react-native-walkthrough-tooltip";

const DetailButton = ({
  label,
  onPress,
  disabled,
  id,
  name,
  horseId,
  horseAge,
  horseGrow,
  user_id,
  jockeyId,
  flag,
}) => {
  const dispatch = useDispatch();
  const [toolTipVisible, setToolTipVisible] = useState(false);

  const handleSubmit = (value, flag) => {
    if (flag == "jockey") {
      const ptValue = value;
      const upSendJockey = {
        jockey_id: jockeyId,
        pt: ptValue,
        what: name,
        user_id: user_id,
      };
      dispatch(JockeyGrazingAction(upSendJockey));
    } else {
      const ptValue = value;
      const upSend = {
        horse_id: horseId,
        age: horseAge,
        grow: horseGrow,
        pt: ptValue,
        what: name,
        user_id: user_id,
      };

      dispatch(upbringingAction(upSend));
    }
  };

  const handleFoodSubmit = (value, flag) => {
    const foodPtValue = value;
    if (flag == "jockey") {
      const upFoodJockeySend = {
        jockey_id: jockeyId,
        pt: foodPtValue,
        what: name,
        user_id: user_id,
      };
      dispatch(JockeyFoodAction(upFoodJockeySend));
    } else {
      const upFoodSend = {
        horse_id: horseId,
        pt: foodPtValue,
        what: name,
        user_id: user_id,
      };
      dispatch(upbringingFoodAction(upFoodSend));
    }
  };

  if (id == 1) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"1pt"}
              id={id}
              onPress={() => handleFoodSubmit(1, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 2) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"3pt"}
              id={id}
              onPress={() => handleFoodSubmit(3, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 3) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"5pt"}
              id={id}
              onPress={() => handleFoodSubmit(5, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 4) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"2pt"}
              id={id}
              onPress={() => handleFoodSubmit(2, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 5) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"4pt"}
              id={id}
              onPress={() => handleFoodSubmit(4, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 6) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"6pt"}
              id={id}
              onPress={() => handleFoodSubmit(6, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 11) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 12 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        tooltipStyle={{ width: 160 }}
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              count={"100pt"}
              id={id}
              onPress={() => handleSubmit(100, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else if (id == 12) {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 20 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        // tooltipStyle={{ width: 160 }}

        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              label={"馬なり"}
              count={"2pt"}
              onPress={() => handleSubmit(2, flag)}
            />
            <ModalButton
              label={"強め"}
              count={"4pt"}
              onPress={() => handleSubmit(4, flag)}
            />
            <ModalButton
              label={"一杯"}
              count={"6pt"}
              onPress={() => handleSubmit(6, flag)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 55, height: 20 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="rgba(0,0,0,0)"
        childrenWrapperStyle={{ display: "none" }}
        // tooltipStyle={{ width: 160 }}

        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <View style={styles.TooltipContent}>
            <ModalButton
              label={"馬なり"}
              count={"1pt"}
              onPress={() => handleSubmit(1)}
            />
            <ModalButton
              label={"強め"}
              count={"3pt"}
              onPress={() => handleSubmit(3)}
            />
            <ModalButton
              label={"一杯"}
              count={"5pt"}
              onPress={() => handleSubmit(5)}
            />
          </View>
        }
        contentStyle={{ backgroundColor: "rgba(0,0,0,0)", bottom: 90 }}
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabled]}
          onPress={onPress ? onPress : () => setToolTipVisible(true)}
          disabled={disabled ? disabled : false}
        >
          <Text style={styles.label}>{label ? label : "Button"}</Text>
        </TouchableOpacity>
      </Tooltip>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.DetailButtonColor,
    borderRadius: 50,
    height: 25,
    width: 100,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.black,
  },
  label: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 700,
    textAlign: "center",
    fontWeight: 600,
    fontWeight: "bold",
    textShadowColor: colors.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  TooltipContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    user_id: state.user.userData.id,
  };
};

export default connect(mapStateToProps)(DetailButton);
